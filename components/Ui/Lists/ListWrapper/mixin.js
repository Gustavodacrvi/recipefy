

export default jsonId => ({
  mounted() {
    this.saveList(this.getJson())
  },
  methods: {
    getJson() {
      return JSON.parse(localStorage.getItem(`${jsonId}`)) || []
    },
    saveJson(arr) {
      localStorage.setItem(`${jsonId}`, JSON.stringify(arr))
      this.saveList(arr)
    },
    saveList(completed) {
      this.list = this.list.map(item => ({...item, completed: completed.includes(item.id)}))
    },
    toggleItem(id) {
      const completed = this.getJson()
      if (completed.includes(id)) {
        this.saveJson(completed.filter(el => el !== id))
      } else {
        this.saveJson([...completed, id])
      }
    },
  },
})
