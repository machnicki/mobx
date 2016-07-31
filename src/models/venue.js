import { observable } from 'mobx'

class Venue {
  @observable name = ''
  @computed get items() {
    return 'my items'
  }
}

function Venue() {
  return observable({
    name: '',
  })
}
