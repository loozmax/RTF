export class NewspaperModel {

  constructor(
    public textOne?: string,
    public textGroupTwo?: ITextGroupTwo,
    public textGroupThree?: ITextGroupThree,
    public date?: string,
    public maketName?: string
  ) { }
}

export interface ITextGroupTwo {
  textFirst: string,
  textSecond: string
}

export interface ITextGroupThree {
  textFirst: string,
  textSecond: string,
  textThree: string
}