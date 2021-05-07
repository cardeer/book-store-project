<template>
  <Layout>
    <Column
      v-if="!submit"
      id="action-zone"
      justify-content="center"
      align-items="center"
    >
      <p id="title">Generate Secret Code</p>

      <input
        id="file-input"
        ref="input"
        type="file"
        style="display: none"
        @change="upload"
      />

      <input
        id="link-input"
        v-model="link"
        class="input"
        type="text"
        placeholder="Paste book link here"
        autocomplete="off"
        @keyup.enter="createImage"
      />

      <Row class="text-line" align-items="center">
        <span class="line"></span>
        <span class="line-text">OR</span>
        <span class="line"></span>
      </Row>

      <label id="file-input-label" class="clickable" for="file-input">
        <Row justify-content="center" align-items="center">
          <Icon
            icon="upload"
            color="var(--white)"
            style="margin-right: 10px"
          />Upload image
        </Row>
      </label>
    </Column>

    <Column
      v-else
      id="image-zone"
      justify-content="center"
      align-items="center"
    >
      <div ref="imageZone"></div>
    </Column>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      canvasWidth: 300,
      canvasHeight: 300,
      createMode: false,
      link: '',
      submit: false,
    }
  },

  methods: {
    createImage() {
      this.submit = true

      const split = this.link.split('/books/view/')
      const id = parseInt(split[1]) - 1
      const r = Math.floor(id / 65536)
      const g = Math.floor((id % 65536) / 256)
      const b = id % 256

      const canvas = document.createElement('canvas')
      canvas.width = this.canvasWidth
      canvas.height = this.canvasHeight
      const ctx = canvas.getContext('2d')

      const backgroundImage = new Image()
      backgroundImage.src =
        'https://i.pinimg.com/originals/0b/f6/86/0bf68614fbbdf1cac7c5dd6de0c95a25.png'
      backgroundImage.onload = () => {
        ctx.drawImage(
          backgroundImage,
          0,
          0,
          backgroundImage.width,
          backgroundImage.height
        )

        ctx.fillStyle = `rgb(${r}, ${g}, ${b}`
        ctx.fillRect(0, 0, 1, 1)

        ctx.font = '25px Open Sans'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText('Isekai', 150, 120)
        ctx.fillText('Ohayou', 150, 150)
        ctx.font = '16px Open Sans'
        ctx.fillText('Isekai Book Store', 150, 200)
        ctx.textAlign = 'right'
        ctx.fillText(`#${id + 1}`, 285, 285)

        this.$refs.imageZone.appendChild(canvas)
      }
    },

    upload() {
      const dummyCanvas = document.createElement('canvas')
      dummyCanvas.width = this.canvasWidth
      dummyCanvas.height = this.canvasHeight
      const ctx = dummyCanvas.getContext('2d')
      const file = this.$refs.input.files[0]

      const image = new Image()

      const fileReader = new FileReader()
      fileReader.onload = () => {
        image.src = fileReader.result
      }
      fileReader.readAsDataURL(file)

      image.onload = () => {
        ctx.drawImage(image, 0, 0)
        this.getImageData(
          ctx.getImageData(0, 0, this.canvasWidth, this.canvasHeight)
        )
        dummyCanvas.remove()
      }
    },

    getImageData({ data }) {
      const r = data[0]
      const g = data[1]
      const b = data[2]
      this.$router.push(`/books/view/${this.$getIdFromColor(r, g, b)}`)
    },
  },
}
</script>

<style scoped>
#action-zone,
#image-zone {
  height: calc(100vh - var(--navbar-height));
}

#title {
  margin: 0;
  margin-bottom: 30px;
  font-size: 25px;
}

#link-input {
  width: 100%;
  max-width: 500px;
}

#file-input-label {
  padding: 16px;
  width: 100%;
  max-width: 500px;
  background-color: var(--primary-color);
  color: var(--white);
}

.text-line {
  margin: 20px 0;
  width: 100%;
  max-width: 500px;
}

.text-line .line {
  flex-grow: 1;
  height: 1px;
  background-color: var(--black);
}

.text-line .line-text {
  margin: 0 10px;
}
</style>
