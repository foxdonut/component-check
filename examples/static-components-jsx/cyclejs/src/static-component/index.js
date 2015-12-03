/** @jsx hJSX */
import { hJSX } from '@cycle/dom';
import { Observable } from 'rx';

export default function StaticComponent(sources) {
  const vtree = <p>Static content.</p>;
  const vtree$ = Observable.just(vtree);
  const sinks = {
    DOM: vtree$
  };
  return sinks;
}
