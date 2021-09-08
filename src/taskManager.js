/**
 * Task Manager
 */
export default class TaskManager {
  /**
   * run tasks parellelly
   */
  static runParallelly(tasks) {}

  /**
   * run tasks in sequence
   * @param {*} tasks
   */
  static runSequence(tasks) {}

  constructor() {
    this.tasks = [];
  }

  add(task, order) {
    this.tasks.push({
      order,
      task,
    });
  }

  remove(task) {
    this.tasks = this.tasks.filter((item) => item.tasks !== task);
  }

  clear() {
    this.tasks = [];
  }

  run(parallel) {
    const tasks = this.tasks
      .sort((a, b) => a.order - b.order)
      .map((item) => item.task);

    return parallel
      ? TaskManager.runParallelly(tasks)
      : TaskManager.runSequence(tasks);
  }
}
