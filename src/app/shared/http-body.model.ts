export class HttpBody {
  buildDate: string;
  buildName: string;
  content: any;
  message: string;
  status: string;

  constructor(buildDate: string, buildName: string, content: any, message: string, status: string) {
    this.buildDate = buildDate;
    this.buildName = buildName;
    this.content = content;
    this.message = message;
    this.status = status;
  }
}
