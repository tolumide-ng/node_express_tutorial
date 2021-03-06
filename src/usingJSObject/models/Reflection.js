import moment from 'moment';
import uuid from 'uuid';

class Reflection {
  constructor() {
    this.reflections = [];
  }

  create(data) {
    const newReflection = {
      id: uuid.v4(),
      success: data.success || '',
      lowPoint: data.lowPoint || '',
      takeAway: data.takeAway || '',
      createdDate: moment.now(),
      modifiedDate: moment.now(),
    };
    this.reflections.push(newReflection);
    return newReflection;
  }

  findOne(id) {
    return this.reflections.find(reflect => reflect.id === id);
  }

  findAll() {
    return this.reflections;
  }

  update(id, data) {
    const reflection = this.findOne(id);
    console.log(reflection);
    const index = this.reflections.indexOf(reflection);
    console.log(reflection);
    console.log(data);
    reflection.success = data.success || reflection.success;
    reflection.lowPoint = data.lowPoint || reflection.lowPoint;
    reflection.takeAway = data.takeAway || reflection.takeAway;
    reflection.modifiedDate = moment.now();
    return this.reflections[index];
  }

  delete(id) {
    const reflection = this.findOne(id);
    const index = this.reflections.indexOf(reflection);
    this.reflections.splice(index, 1);
    return {};
  }
}

export default new Reflection();
