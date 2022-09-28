export interface ResponseModel<TModel> {
  statusCode: number;
  message: string;
  result: TModel;
}
