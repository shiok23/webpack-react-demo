import { observable, computed, action } from 'mobx'

class Store {
  @observable cities = []

  @computed
  get total() {
    return this.cities.length
  }

  @action.bound
  clearCities() {
    this.cities = []
  }

  @action.bound
  add(values: any) {
    this.cities = values
  }
}
export default new Store()
