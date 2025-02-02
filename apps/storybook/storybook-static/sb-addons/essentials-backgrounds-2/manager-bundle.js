try {
  var ne = Object.create
  var F = Object.defineProperty
  var oe = Object.getOwnPropertyDescriptor
  var ie = Object.getOwnPropertyNames
  var ae = Object.getPrototypeOf,
    se = Object.prototype.hasOwnProperty
  var C = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
      ? new Proxy(e, {get: (t, s) => (typeof require < 'u' ? require : t)[s]})
      : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments)
    throw new Error('Dynamic require of "' + e + '" is not supported')
  })
  var L = (e, t) => () => (e && (t = e((e = 0))), t)
  var le = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports)
  var ue = (e, t, s, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let i of ie(t))
        !se.call(e, i) &&
          i !== s &&
          F(e, i, {
            get: () => t[i],
            enumerable: !(o = oe(t, i)) || o.enumerable,
          })
    return e
  }
  var de = (e, t, s) => (
    (s = e != null ? ne(ae(e)) : {}),
    ue(
      t || !e || !e.__esModule
        ? F(s, 'default', {value: e, enumerable: !0})
        : s,
      e
    )
  )
  var c = L(() => {})
  var f = L(() => {})
  var m = L(() => {})
  var Q = le((J, D) => {
    c()
    f()
    m()
    ;(function (e) {
      if (typeof J == 'object' && typeof D < 'u') D.exports = e()
      else if (typeof define == 'function' && define.amd) define([], e)
      else {
        var t
        typeof window < 'u' || typeof window < 'u'
          ? (t = window)
          : typeof self < 'u'
          ? (t = self)
          : (t = this),
          (t.memoizerific = e())
      }
    })(function () {
      var e, t, s
      return (function o(i, g, l) {
        function n(a, h) {
          if (!g[a]) {
            if (!i[a]) {
              var d = typeof C == 'function' && C
              if (!h && d) return d(a, !0)
              if (r) return r(a, !0)
              var b = new Error("Cannot find module '" + a + "'")
              throw ((b.code = 'MODULE_NOT_FOUND'), b)
            }
            var p = (g[a] = {exports: {}})
            i[a][0].call(
              p.exports,
              function (y) {
                var S = i[a][1][y]
                return n(S || y)
              },
              p,
              p.exports,
              o,
              i,
              g,
              l
            )
          }
          return g[a].exports
        }
        for (var r = typeof C == 'function' && C, u = 0; u < l.length; u++)
          n(l[u])
        return n
      })(
        {
          1: [
            function (o, i, g) {
              i.exports = function (l) {
                if (typeof Map != 'function' || l) {
                  var n = o('./similar')
                  return new n()
                } else return new Map()
              }
            },
            {'./similar': 2},
          ],
          2: [
            function (o, i, g) {
              function l() {
                return (
                  (this.list = []),
                  (this.lastItem = void 0),
                  (this.size = 0),
                  this
                )
              }
              ;(l.prototype.get = function (n) {
                var r
                if (this.lastItem && this.isEqual(this.lastItem.key, n))
                  return this.lastItem.val
                if (((r = this.indexOf(n)), r >= 0))
                  return (this.lastItem = this.list[r]), this.list[r].val
              }),
                (l.prototype.set = function (n, r) {
                  var u
                  return this.lastItem && this.isEqual(this.lastItem.key, n)
                    ? ((this.lastItem.val = r), this)
                    : ((u = this.indexOf(n)),
                      u >= 0
                        ? ((this.lastItem = this.list[u]),
                          (this.list[u].val = r),
                          this)
                        : ((this.lastItem = {key: n, val: r}),
                          this.list.push(this.lastItem),
                          this.size++,
                          this))
                }),
                (l.prototype.delete = function (n) {
                  var r
                  if (
                    (this.lastItem &&
                      this.isEqual(this.lastItem.key, n) &&
                      (this.lastItem = void 0),
                    (r = this.indexOf(n)),
                    r >= 0)
                  )
                    return this.size--, this.list.splice(r, 1)[0]
                }),
                (l.prototype.has = function (n) {
                  var r
                  return this.lastItem && this.isEqual(this.lastItem.key, n)
                    ? !0
                    : ((r = this.indexOf(n)),
                      r >= 0 ? ((this.lastItem = this.list[r]), !0) : !1)
                }),
                (l.prototype.forEach = function (n, r) {
                  var u
                  for (u = 0; u < this.size; u++)
                    n.call(r || this, this.list[u].val, this.list[u].key, this)
                }),
                (l.prototype.indexOf = function (n) {
                  var r
                  for (r = 0; r < this.size; r++)
                    if (this.isEqual(this.list[r].key, n)) return r
                  return -1
                }),
                (l.prototype.isEqual = function (n, r) {
                  return n === r || (n !== n && r !== r)
                }),
                (i.exports = l)
            },
            {},
          ],
          3: [
            function (o, i, g) {
              var l = o('map-or-similar')
              i.exports = function (a) {
                var h = new l(!1),
                  d = []
                return function (b) {
                  var p = function () {
                    var y = h,
                      S,
                      A,
                      O = arguments.length - 1,
                      B = Array(O + 1),
                      x = !0,
                      I
                    if ((p.numArgs || p.numArgs === 0) && p.numArgs !== O + 1)
                      throw new Error(
                        'Memoizerific functions should always be called with the same number of arguments'
                      )
                    for (I = 0; I < O; I++) {
                      if (
                        ((B[I] = {cacheItem: y, arg: arguments[I]}),
                        y.has(arguments[I]))
                      ) {
                        y = y.get(arguments[I])
                        continue
                      }
                      ;(x = !1),
                        (S = new l(!1)),
                        y.set(arguments[I], S),
                        (y = S)
                    }
                    return (
                      x &&
                        (y.has(arguments[O])
                          ? (A = y.get(arguments[O]))
                          : (x = !1)),
                      x ||
                        ((A = b.apply(null, arguments)),
                        y.set(arguments[O], A)),
                      a > 0 &&
                        ((B[O] = {cacheItem: y, arg: arguments[O]}),
                        x ? n(d, B) : d.push(B),
                        d.length > a && r(d.shift())),
                      (p.wasMemoized = x),
                      (p.numArgs = O + 1),
                      A
                    )
                  }
                  return (
                    (p.limit = a),
                    (p.wasMemoized = !1),
                    (p.cache = h),
                    (p.lru = d),
                    p
                  )
                }
              }
              function n(a, h) {
                var d = a.length,
                  b = h.length,
                  p,
                  y,
                  S
                for (y = 0; y < d; y++) {
                  for (p = !0, S = 0; S < b; S++)
                    if (!u(a[y][S].arg, h[S].arg)) {
                      p = !1
                      break
                    }
                  if (p) break
                }
                a.push(a.splice(y, 1)[0])
              }
              function r(a) {
                var h = a.length,
                  d = a[h - 1],
                  b,
                  p
                for (
                  d.cacheItem.delete(d.arg), p = h - 2;
                  p >= 0 &&
                  ((d = a[p]), (b = d.cacheItem.get(d.arg)), !b || !b.size);
                  p--
                )
                  d.cacheItem.delete(d.arg)
              }
              function u(a, h) {
                return a === h || (a !== a && h !== h)
              }
            },
            {'map-or-similar': 1},
          ],
        },
        {},
        [3]
      )(3)
    })
  })
  c()
  f()
  m()
  c()
  f()
  m()
  c()
  f()
  m()
  c()
  f()
  m()
  c()
  f()
  m()
  var Y = (() => {
    let e
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
        ? (e = globalThis)
        : typeof window < 'u'
        ? (e = window)
        : typeof self < 'u'
        ? (e = self)
        : (e = {}),
      e
    )
  })()
  c()
  f()
  m()
  function W(e) {
    for (var t = [], s = 1; s < arguments.length; s++) t[s - 1] = arguments[s]
    var o = Array.from(typeof e == 'string' ? [e] : e)
    o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, '')
    var i = o.reduce(function (n, r) {
      var u = r.match(/\n([\t ]+|(?!\s).)/g)
      return u
        ? n.concat(
            u.map(function (a) {
              var h, d
              return (d =
                (h = a.match(/[\t ]/g)) === null || h === void 0
                  ? void 0
                  : h.length) !== null && d !== void 0
                ? d
                : 0
            })
          )
        : n
    }, [])
    if (i.length) {
      var g = new RegExp(
        `
[	 ]{` +
          Math.min.apply(Math, i) +
          '}',
        'g'
      )
      o = o.map(function (n) {
        return n.replace(
          g,
          `
`
        )
      })
    }
    o[0] = o[0].replace(/^\r?\n/, '')
    var l = o[0]
    return (
      t.forEach(function (n, r) {
        var u = l.match(/(?:^|\n)( *)$/),
          a = u ? u[1] : '',
          h = n
        typeof n == 'string' &&
          n.includes(`
`) &&
          (h = String(n)
            .split(
              `
`
            )
            .map(function (d, b) {
              return b === 0 ? d : '' + a + d
            }).join(`
`)),
          (l += h + o[r + 1])
      }),
      l
    )
  }
  c()
  f()
  m()
  var Me = __STORYBOOKCLIENTLOGGER__,
    {deprecate: Le, logger: M, once: Re, pretty: we} = __STORYBOOKCLIENTLOGGER__
  var R = 'storybook/background',
    k = 'backgrounds',
    {document: Ke, window: Fe} = Y
  var $ = (e, t = [], s) => {
    if (e === 'transparent') return 'transparent'
    if (t.find((i) => i.value === e)) return e
    let o = t.find((i) => i.name === s)
    if (o) return o.value
    if (s) {
      let i = t.map((g) => g.name).join(', ')
      M.warn(W`
        Backgrounds Addon: could not find the default color "${s}".
        These are the available colors for your story based on your configuration:
        ${i}.
      `)
    }
    return 'transparent'
  }
  c()
  f()
  m()
  var T = __REACT__,
    {
      Children: je,
      Component: Ve,
      Fragment: w,
      Profiler: Ze,
      PureComponent: Je,
      StrictMode: Qe,
      Suspense: Xe,
      __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: et,
      cloneElement: tt,
      createContext: rt,
      createElement: nt,
      createFactory: ot,
      createRef: it,
      forwardRef: at,
      isValidElement: st,
      lazy: lt,
      memo: P,
      useCallback: U,
      useContext: ut,
      useDebugValue: dt,
      useEffect: ct,
      useImperativeHandle: ft,
      useLayoutEffect: mt,
      useMemo: j,
      useReducer: pt,
      useRef: ht,
      useState: V,
      version: gt,
    } = __REACT__
  c()
  f()
  m()
  var _t = __STORYBOOKAPI__,
    {
      ActiveTabs: Et,
      Consumer: vt,
      ManagerContext: Ot,
      Provider: kt,
      addons: N,
      combineParameters: It,
      controlOrMetaKey: xt,
      controlOrMetaSymbol: Ct,
      eventMatchesShortcut: At,
      eventToShortcut: Bt,
      isMacLike: Mt,
      isShortcutTaken: Lt,
      keyToSymbol: Rt,
      merge: wt,
      mockChannel: Pt,
      optionOrAltSymbol: Nt,
      shortcutMatchesShortcut: Gt,
      shortcutToHumanString: Ht,
      types: Z,
      useAddonState: Dt,
      useArgTypes: zt,
      useArgs: qt,
      useChannel: Kt,
      useGlobalTypes: Ft,
      useGlobals: G,
      useParameter: H,
      useSharedState: Yt,
      useStoryPrepared: Wt,
      useStorybookApi: $t,
      useStorybookState: Ut,
    } = __STORYBOOKAPI__
  var K = de(Q(), 1)
  c()
  f()
  m()
  var rr = __STORYBOOKCOMPONENTS__,
    {
      A: nr,
      ActionBar: or,
      AddonPanel: ir,
      Badge: ar,
      Bar: sr,
      Blockquote: lr,
      Button: ur,
      Code: dr,
      DL: cr,
      Div: fr,
      DocumentWrapper: mr,
      ErrorFormatter: pr,
      FlexBar: hr,
      Form: gr,
      H1: yr,
      H2: br,
      H3: Sr,
      H4: Tr,
      H5: _r,
      H6: Er,
      HR: vr,
      IconButton: z,
      IconButtonSkeleton: Or,
      Icons: q,
      Img: kr,
      LI: Ir,
      Link: xr,
      ListItem: Cr,
      Loader: Ar,
      OL: Br,
      P: Mr,
      Placeholder: Lr,
      Pre: Rr,
      ResetWrapper: wr,
      ScrollArea: Pr,
      Separator: Nr,
      Spaced: Gr,
      Span: Hr,
      StorybookIcon: Dr,
      StorybookLogo: zr,
      Symbols: qr,
      SyntaxHighlighter: Kr,
      TT: Fr,
      TabBar: Yr,
      TabButton: Wr,
      TabWrapper: $r,
      Table: Ur,
      Tabs: jr,
      TabsState: Vr,
      TooltipLinkList: X,
      TooltipMessage: Zr,
      TooltipNote: Jr,
      UL: Qr,
      WithTooltip: ee,
      WithTooltipPure: Xr,
      Zoom: en,
      codeCommon: tn,
      components: rn,
      createCopyToClipboardFunction: nn,
      getStoryHref: on,
      icons: an,
      interleaveSeparators: sn,
      nameSpaceClassNames: ln,
      resetComponents: un,
      withReset: dn,
    } = __STORYBOOKCOMPONENTS__
  c()
  f()
  m()
  var hn = __STORYBOOKTHEMING__,
    {
      CacheProvider: gn,
      ClassNames: yn,
      Global: bn,
      ThemeProvider: Sn,
      background: Tn,
      color: _n,
      convert: En,
      create: vn,
      createCache: On,
      createGlobal: kn,
      createReset: In,
      css: xn,
      darken: Cn,
      ensure: An,
      ignoreSsrWarning: Bn,
      isPropValid: Mn,
      jsx: Ln,
      keyframes: Rn,
      lighten: wn,
      styled: te,
      themes: Pn,
      typography: Nn,
      useTheme: Gn,
      withTheme: Hn,
    } = __STORYBOOKTHEMING__
  var ce = te.span(
      ({background: e}) => ({
        borderRadius: '1rem',
        display: 'block',
        height: '1rem',
        width: '1rem',
        background: e,
      }),
      ({theme: e}) => ({boxShadow: `${e.appBorderColor} 0 0 0 1px inset`})
    ),
    re = (0, K.default)(1e3)((e, t, s, o, i, g) => ({
      id: e || t,
      title: t,
      onClick: () => {
        i({selected: s, name: t})
      },
      value: s,
      right: o ? T.createElement(ce, {background: s}) : void 0,
      active: g,
    })),
    fe = (0, K.default)(10)((e, t, s) => {
      let o = e.map(({name: i, value: g}) => re(null, i, g, !0, s, g === t))
      return t !== 'transparent'
        ? [re('reset', 'Clear background', 'transparent', null, s, !1), ...o]
        : o
    }),
    me = {default: null, disable: !0, values: []},
    pe = P(function () {
      let e = H(k, me),
        [t, s] = V(!1),
        [o, i] = G(),
        g = o[k]?.value,
        l = j(() => $(g, e.values, e.default), [e, g])
      Array.isArray(e) &&
        M.warn(
          'Addon Backgrounds api has changed in Storybook 6.0. Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md'
        )
      let n = U(
        (r) => {
          i({[k]: {...o[k], value: r}})
        },
        [e, o, i]
      )
      return e.disable
        ? null
        : T.createElement(
            w,
            null,
            T.createElement(
              ee,
              {
                placement: 'top',
                closeOnOutsideClick: !0,
                tooltip: ({onHide: r}) =>
                  T.createElement(X, {
                    links: fe(e.values, l, ({selected: u}) => {
                      l !== u && n(u), r()
                    }),
                  }),
                onVisibleChange: s,
              },
              T.createElement(
                z,
                {
                  key: 'background',
                  title: 'Change the background of the preview',
                  active: l !== 'transparent' || t,
                },
                T.createElement(q, {icon: 'photo'})
              )
            )
          )
    }),
    he = P(function () {
      let [e, t] = G(),
        {grid: s} = H(k, {grid: {disable: !1}})
      if (s?.disable) return null
      let o = e[k]?.grid || !1
      return T.createElement(
        z,
        {
          key: 'background',
          active: o,
          title: 'Apply a grid to the preview',
          onClick: () => t({[k]: {...e[k], grid: !o}}),
        },
        T.createElement(q, {icon: 'grid'})
      )
    })
  N.register(R, () => {
    N.add(R, {
      title: 'Backgrounds',
      id: 'backgrounds',
      type: Z.TOOL,
      match: ({viewMode: e}) => !!(e && e.match(/^(story|docs)$/)),
      render: () =>
        T.createElement(
          w,
          null,
          T.createElement(pe, null),
          T.createElement(he, null)
        ),
    })
  })
} catch (e) {
  console.error(
    '[Storybook] One of your manager-entries failed: ' + import.meta.url,
    e
  )
}
//# sourceMappingURL=manager-bundle.js.map
