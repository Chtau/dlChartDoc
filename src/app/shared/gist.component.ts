import { Component, Input, ViewChild, ElementRef, ViewEncapsulation, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'github-gist',
  template:`
    <iframe #iframe type="text/javascript" width="100%" height="100%" frameborder="0" ></iframe>
  `,
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})

export class GithubGist implements AfterContentChecked {
  
  @ViewChild('iframe') iframe:ElementRef;
  @Input() gistId: string = null;
  @Input() file:string;


  ngAfterContentChecked(): void {
    if (this.gistId != null && (this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement)) {
      let fileName = (this.file) ? this.file : ''; 
      this.iframe.nativeElement.id = 'gist-' + this.gistId;
      let doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentElement.contentWindow;
        let content = `
          <html>
          <head>
            <base target="_parent">
          </head>
          <body onload="parent.document.getElementById('${this.iframe.nativeElement.id}')">
          <script type="text/javascript" src="https://gist.github.com/${this.gistId}.js?file=${fileName}"></script>
          </body>
        </html>
      `;
      doc.open();
      doc.write(content);
      doc.close();
    }
  }

}