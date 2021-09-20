// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment as env } from 'src/environments/environment';

// // The HttpHeadersInterceptor allows us to catch the request before is made and add some headers to it
// @Injectable()
// export class HttpHeadersInterceptor implements HttpInterceptor {
//   constructor() {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     // The http request is cloned and some headers are added to it
//     req = req.clone({
//       setHeaders: {
//         'x-rapidapi-key': `esGbwrm390mshS2BC10RALxQRtZTp1W7sFMjsnyJ1JzDXVKW0H`,
//         'x-rapidapi-host': `rawg-video-games-database.p.rapidapi.com`,
//       },
//       setParams: {
//         key: `077994a243d54551b2ce0afc0d0733fc`,
//       },
//     });
//     return next.handle(req);
//   }
// }