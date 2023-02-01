<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrmminabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving minimum absolute value incrementally.



<section class="usage">

## Usage

To use in Observable,

```javascript
incrmminabs = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mminabs@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var incrmminabs = require( 'path/to/vendor/umd/stats-incr-mminabs/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mminabs@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.incrmminabs;
})();
</script>
```

#### incrmminabs( window )

Returns an accumulator `function` which incrementally computes a moving minimum absolute value. The `window` parameter defines the number of values over which to compute the moving minimum absolute value.

```javascript
var accumulator = incrmminabs( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated minimum absolute value. If not provided an input value `x`, the accumulator function returns the current minimum absolute value.

```javascript
var accumulator = incrmminabs( 3 );

var m = accumulator();
// returns null

// Fill the window...
m = accumulator( 2.0 ); // [2.0]
// returns 2.0

m = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.0

m = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 1.0

// Window begins sliding...
m = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns 1.0

m = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns 3.0

m = accumulator();
// returns 3.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mminabs@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmminabs( 5 );

// For each simulated datum, update the moving minimum absolute value...
for ( i = 0; i < 100; i++ ) {
    v = ( randu()*100.0 ) - 50.0;
    accumulator( v );
}
console.log( accumulator() );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/minabs`][@stdlib/stats/incr/minabs]</span><span class="delimiter">: </span><span class="description">compute a minimum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmaxabs`][@stdlib/stats/incr/mmaxabs]</span><span class="delimiter">: </span><span class="description">compute a moving maximum absolute value incrementally.</span>
-   <span class="package-name">[`@stdlib/stats/incr/mmin`][@stdlib/stats/incr/mmin]</span><span class="delimiter">: </span><span class="description">compute a moving minimum incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mminabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mminabs

[test-image]: https://github.com/stdlib-js/stats-incr-mminabs/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-incr-mminabs/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mminabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mminabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mminabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mminabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mminabs/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-incr-mminabs/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-incr-mminabs/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-incr-mminabs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mminabs/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/minabs]: https://github.com/stdlib-js/stats-incr-minabs/tree/umd

[@stdlib/stats/incr/mmaxabs]: https://github.com/stdlib-js/stats-incr-mmaxabs/tree/umd

[@stdlib/stats/incr/mmin]: https://github.com/stdlib-js/stats-incr-mmin/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
