import { Observable, SchedulerLike, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, startWith } from 'rxjs/operators';

interface InputObservableOptions {
  time?: number;
  scheduler?: SchedulerLike;
  minLength?: number;
}
/**
 * Creates an observable variable to be used with a search input
 *
 * @return Observable<string>
 */
export const debounceValueObserver = (subject: Subject<string>, options: InputObservableOptions): Observable<string> => {
  const { time = 400, scheduler, minLength = 3 } = options;
  return subject.pipe(
    debounceTime(time, scheduler),
    filter(query => query.length >= minLength || query.length === 0),
    distinctUntilChanged(),
    startWith('')
  );
};
