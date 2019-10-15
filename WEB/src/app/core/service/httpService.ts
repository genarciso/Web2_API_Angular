import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpUtil} from '../util/httpUtil';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient) {}

    public post(url: string, parametros: any, header?: object): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http.post(HttpUtil.url(url), parametros, header ? header : HttpUtil.headers()), observer);
        });
    }

    public get(url: string): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http
                .get(HttpUtil.url(url), HttpUtil.headers()), observer);
        });
    }

    public delete(url: string): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http
                .delete(HttpUtil.url(url), HttpUtil.headers()), observer);
        });
    }

    public put(url: string, parametros: any): Observable<any> {
        return new Observable(observer => {
            this.verificarRespostaRequisicao(this.http.put(HttpUtil.url(url), parametros, HttpUtil.headers()), observer);
        });
    }

}
