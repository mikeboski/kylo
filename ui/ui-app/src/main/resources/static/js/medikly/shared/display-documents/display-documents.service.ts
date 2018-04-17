import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DisplayDocumentsService {

  protected titleMode: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly titleMode$: Observable<string> = this.titleMode.asObservable();

  protected documents: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  public readonly documents$: Observable<Array<any>> = this.documents.asObservable();

  protected order: BehaviorSubject<string> = new BehaviorSubject('');
  public readonly order$: Observable<string> = this.titleMode.asObservable();

  protected reverse: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly reverse$: Observable<boolean> = this.reverse.asObservable();

  public setTitleMode(titleMode: string) {
    this.titleMode.next(titleMode);
  }

  public setDocuments(documents: any) {
    this.documents.next(documents);
  }

  public getTitleMode():string {
    return this.titleMode.toString();
  }

  public getDocuments(){
    return this.documents;
  }

  public setOrder(order: string) {
    this.order.next(order);
  }

  public setReverse(reverse: boolean) {
    this.reverse.next(reverse);
  }

  constructor() {
  }
}
