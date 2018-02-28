export class TaskRating {
  id: string;
  rating: number;
  rated_by: string;
  created_at: string;
  task_id: string;
  rated: boolean;

  constructor(id: string = "", rating: number = 0, rated_by: string = "", created_at: string = "", task_id: string = "", rated: boolean = false) {
    this.id = id;
    this.rating = rating;
    this.rated_by = rated_by;
    this.created_at = created_at;
    this.task_id = task_id;
    this.rated = rated;
  }

}
