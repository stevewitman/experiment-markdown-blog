![header image](assets/images/header 01.jpg)

# Attribute directives

Change the appearance or behavior of DOM elements and Angular components with attribute directives.

> See the [live example](https://angular.io/generated/live-examples/attribute-directives/stackblitz.html) / [download example](https://angular.io/generated/zips/attribute-directives/attribute-directives.zip) for a working example containing the code snippets in this guide.
---

## Building an attribute directive

This section walks you through creating a highlight directive that sets the background color of the host element to yellow.

1. To create a directive, use the CLI command [`ng generate directive`](https://angular.io/guide/security).

1. To create a directive, use the CLI command `ng generate directive`.

#### ng generate directive highlight

The CLI creates `src/app/highlight.directive.ts`, a corresponding test file `src/app/highlight.directive.spec.ts`, and declares the directive class in the `AppModule`.

The CLI generates the default `src/app/highlight.directive.ts` as follows:

##### src/app/highlight.directive.ts

```
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor() { }
}
```

I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].

I get 10 times more traffic from [Google][] than from
[Yahoo][] or [MSN][].

Visit [Daring Fireball][] for more information.

- `bypassSecurityTrustHtml`
- `bypassSecurityTrustScript`
- `bypassSecurityTrustStyle`
- `bypassSecurityTrustUrl`
- `bypassSecurityTrustResourceUrl`

[1]: http://google.com/        "Google"
[2]: http://search.yahoo.com/  "Yahoo Search"
[3]: http://search.msn.com/    "MSN Search"

[Daring Fireball]: http://daringfireball.net/

[google]: http://google.com/        "Google"
[yahoo]:  http://search.yahoo.com/  "Yahoo Search"
[msn]:    http://search.msn.com/    "MSN Search"