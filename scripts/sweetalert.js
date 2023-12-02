!(function (n, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (n.Sweetalert2 = t());
})(this, function () {
  "use strict";
  var n = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      type: null,
      toast: !1,
      customClass: "",
      target: "body",
      backdrop: !0,
      animation: !0,
      allowOutsideClick: !0,
      allowEscapeKey: !0,
      allowEnterKey: !0,
      showConfirmButton: !0,
      showCancelButton: !1,
      preConfirm: null,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: null,
      confirmButtonClass: null,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: null,
      cancelButtonClass: null,
      buttonsStyling: !0,
      reverseButtons: !1,
      focusConfirm: !0,
      focusCancel: !1,
      showCloseButton: !1,
      closeButtonAriaLabel: "Close this dialog",
      showLoaderOnConfirm: !1,
      imageUrl: null,
      imageWidth: null,
      imageHeight: null,
      imageAlt: "",
      imageClass: null,
      timer: null,
      width: null,
      padding: null,
      background: null,
      input: null,
      inputPlaceholder: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: !0,
      inputClass: null,
      inputAttributes: {},
      inputValidator: null,
      grow: !1,
      position: "center",
      progressSteps: [],
      currentProgressStep: null,
      progressStepsDistance: null,
      onBeforeOpen: null,
      onOpen: null,
      onClose: null,
      useRejections: !1,
      expectRejections: !1,
    },
    t = ["useRejections", "expectRejections"],
    e = function (n) {
      var t = {};
      for (var e in n) t[n[e]] = "swal2-" + n[e];
      return t;
    },
    o = e([
      "container",
      "shown",
      "iosfix",
      "popup",
      "modal",
      "no-backdrop",
      "toast",
      "toast-shown",
      "fade",
      "show",
      "hide",
      "noanimation",
      "close",
      "title",
      "header",
      "content",
      "actions",
      "confirm",
      "cancel",
      "footer",
      "icon",
      "image",
      "input",
      "has-input",
      "file",
      "range",
      "select",
      "radio",
      "checkbox",
      "textarea",
      "inputerror",
      "validationerror",
      "progresssteps",
      "activeprogressstep",
      "progresscircle",
      "progressline",
      "loading",
      "styled",
      "top",
      "top-start",
      "top-end",
      "top-left",
      "top-right",
      "center",
      "center-start",
      "center-end",
      "center-left",
      "center-right",
      "bottom",
      "bottom-start",
      "bottom-end",
      "bottom-left",
      "bottom-right",
      "grow-row",
      "grow-column",
      "grow-fullscreen",
    ]),
    a = e(["success", "warning", "info", "question", "error"]),
    s = "SweetAlert2:",
    r = function (n) {
      console.warn(s + " " + n);
    },
    i = function (n) {
      console.error(s + " " + n);
    },
    l = [],
    c = function (n) {
      -1 === l.indexOf(n) && (l.push(n), r(n));
    },
    p = function (n) {
      return "function" == typeof n ? n() : n;
    },
    w =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              "function" == typeof Symbol &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          },
    u =
      Object.assign ||
      function (n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = arguments[t];
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
        }
        return n;
      },
    d = function (n, t) {
      if (Array.isArray(n)) return n;
      if (Symbol.iterator in Object(n))
        return (function (n, t) {
          var e = [],
            o = !0,
            a = !1,
            s = void 0;
          try {
            for (
              var r, i = n[Symbol.iterator]();
              !(o = (r = i.next()).done) &&
              (e.push(r.value), !t || e.length !== t);
              o = !0
            );
          } catch (n) {
            (a = !0), (s = n);
          } finally {
            try {
              !o && i.return && i.return();
            } finally {
              if (a) throw s;
            }
          }
          return e;
        })(n, t);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    },
    f = u({}, n),
    m = [],
    b = void 0,
    g = void 0,
    h = function (n) {
      for (var t in n)
        v.isValidParameter(t) || r('Unknown parameter "' + t + '"'),
          v.isDeprecatedParameter(t) &&
            c(
              'The parameter "' +
                t +
                '" is deprecated and will be removed in the next major release.'
            );
    },
    x = function (n) {
      (!n.target ||
        ("string" == typeof n.target && !document.querySelector(n.target)) ||
        ("string" != typeof n.target && !n.target.appendChild)) &&
        (r('Target parameter is not valid, defaulting to "body"'),
        (n.target = "body"));
      var t = void 0,
        e = P(),
        s =
          "string" == typeof n.target
            ? document.querySelector(n.target)
            : n.target;
      (t = e && s && e.parentNode !== s.parentNode ? A(n) : e || A(n)),
        n.width &&
          (t.style.width =
            "number" == typeof n.width ? n.width + "px" : n.width),
        n.padding &&
          (t.style.padding =
            "number" == typeof n.padding ? n.padding + "px" : n.padding),
        n.background && (t.style.background = n.background);
      for (
        var l = window.getComputedStyle(t).getPropertyValue("background-color"),
          c = t.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          ),
          p = 0;
        p < c.length;
        p++
      )
        c[p].style.backgroundColor = l;
      var w = E(),
        u = z(),
        d = j().querySelector("#" + o.content),
        f = Z(),
        m = Y(),
        b = R(),
        g = H(),
        h = D();
      if (
        (n.titleText
          ? (u.innerText = n.titleText)
          : n.title && (u.innerHTML = n.title.split("\n").join("<br />")),
        "string" == typeof n.backdrop
          ? (E().style.background = n.backdrop)
          : n.backdrop ||
            Q([document.documentElement, document.body], o["no-backdrop"]),
        n.html
          ? I(n.html, d)
          : n.text
          ? ((d.textContent = n.text), G(d))
          : nn(d),
        n.position in o
          ? Q(w, o[n.position])
          : (r('The "position" parameter is not valid, defaulting to "center"'),
            Q(w, o.center)),
        n.grow && "string" == typeof n.grow)
      ) {
        var x = "grow-" + n.grow;
        x in o && Q(w, o[x]);
      }
      "function" == typeof n.animation && (n.animation = n.animation.call()),
        n.showCloseButton
          ? (g.setAttribute("aria-label", n.closeButtonAriaLabel), G(g))
          : nn(g),
        (t.className = o.popup),
        n.toast
          ? (Q([document.documentElement, document.body], o["toast-shown"]),
            Q(t, o.toast))
          : Q(t, o.modal),
        n.customClass && Q(t, n.customClass);
      var k = V(),
        y = parseInt(
          null === n.currentProgressStep
            ? v.getQueueStep()
            : n.currentProgressStep,
          10
        );
      n.progressSteps && n.progressSteps.length
        ? (G(k),
          tn(k),
          y >= n.progressSteps.length &&
            r(
              "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
            ),
          n.progressSteps.forEach(function (t, e) {
            var a = document.createElement("li");
            if (
              (Q(a, o.progresscircle),
              (a.innerHTML = t),
              e === y && Q(a, o.activeprogressstep),
              k.appendChild(a),
              e !== n.progressSteps.length - 1)
            ) {
              var s = document.createElement("li");
              Q(s, o.progressline),
                n.progressStepsDistance &&
                  (s.style.width = n.progressStepsDistance),
                k.appendChild(s);
            }
          }))
        : nn(k);
      for (var C = L(), S = 0; S < C.length; S++) nn(C[S]);
      if (n.type) {
        var B = !1;
        for (var T in a)
          if (n.type === T) {
            B = !0;
            break;
          }
        if (!B) return i("Unknown alert type: " + n.type), !1;
        var O = t.querySelector("." + o.icon + "." + a[n.type]);
        G(O), n.animation && Q(O, "swal2-animate-" + n.type + "-icon");
      }
      var N = q();
      if (
        (n.imageUrl
          ? (N.setAttribute("src", n.imageUrl),
            N.setAttribute("alt", n.imageAlt),
            G(N),
            n.imageWidth
              ? N.setAttribute("width", n.imageWidth)
              : N.removeAttribute("width"),
            n.imageHeight
              ? N.setAttribute("height", n.imageHeight)
              : N.removeAttribute("height"),
            (N.className = o.image),
            n.imageClass && Q(N, n.imageClass))
          : nn(N),
        n.showCancelButton ? (b.style.display = "inline-block") : nn(b),
        n.showConfirmButton ? on(m, "display") : nn(m),
        n.showConfirmButton || n.showCancelButton ? G(f) : nn(f),
        (m.innerHTML = n.confirmButtonText),
        (b.innerHTML = n.cancelButtonText),
        m.setAttribute("aria-label", n.confirmButtonAriaLabel),
        b.setAttribute("aria-label", n.cancelButtonAriaLabel),
        (m.className = o.confirm),
        Q(m, n.confirmButtonClass),
        (b.className = o.cancel),
        Q(b, n.cancelButtonClass),
        n.buttonsStyling)
      ) {
        Q([m, b], o.styled),
          n.confirmButtonColor &&
            (m.style.backgroundColor = n.confirmButtonColor),
          n.cancelButtonColor &&
            (b.style.backgroundColor = n.cancelButtonColor);
        var M = window.getComputedStyle(m).getPropertyValue("background-color");
        (m.style.borderLeftColor = M), (m.style.borderRightColor = M);
      } else
        F([m, b], o.styled),
          (m.style.backgroundColor =
            m.style.borderLeftColor =
            m.style.borderRightColor =
              ""),
          (b.style.backgroundColor =
            b.style.borderLeftColor =
            b.style.borderRightColor =
              "");
      I(n.footer, h),
        !0 === n.animation ? F(t, o.noanimation) : Q(t, o.noanimation),
        n.showLoaderOnConfirm &&
          !n.preConfirm &&
          r(
            "showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"
          );
    },
    k = function () {
      null === C.previousBodyPadding &&
        document.body.scrollHeight > window.innerHeight &&
        ((C.previousBodyPadding = document.body.style.paddingRight),
        (document.body.style.paddingRight = rn() + "px"));
    },
    y = function () {
      if (
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream &&
        !W(document.body, o.iosfix)
      ) {
        var n = document.body.scrollTop;
        (document.body.style.top = -1 * n + "px"), Q(document.body, o.iosfix);
      }
    },
    v = function n() {
      for (var t = arguments.length, e = Array(t), a = 0; a < t; a++)
        e[a] = arguments[a];
      if ("undefined" != typeof window) {
        if (
          ("undefined" == typeof Promise &&
            i(
              "This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"
            ),
          void 0 === e[0])
        )
          return i("SweetAlert2 expects at least 1 attribute!"), !1;
        var s = u({}, f);
        switch (w(e[0])) {
          case "string":
            (s.title = e[0]), (s.html = e[1]), (s.type = e[2]);
            break;
          case "object":
            if (
              (h(e[0]),
              u(s, e[0]),
              (s.extraParams = e[0].extraParams),
              "email" === s.input && null === s.inputValidator)
            ) {
              var r = function (n) {
                return new Promise(function (t, e) {
                  /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
                    n
                  )
                    ? t()
                    : e("Invalid email address");
                });
              };
              s.inputValidator = s.expectRejections
                ? r
                : n.adaptInputValidator(r);
            }
            if ("url" === s.input && null === s.inputValidator) {
              var l = function (n) {
                return new Promise(function (t, e) {
                  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(
                    n
                  )
                    ? t()
                    : e("Invalid URL");
                });
              };
              s.inputValidator = s.expectRejections
                ? l
                : n.adaptInputValidator(l);
            }
            break;
          default:
            return (
              i(
                'Unexpected type of argument! Expected "string" or "object", got ' +
                  w(e[0])
              ),
              !1
            );
        }
        x(s);
        var c = E(),
          m = P();
        return new Promise(function (t, e) {
          var a = function (e) {
              n.closePopup(s.onClose), s.useRejections ? t(e) : t({ value: e });
            },
            r = function (o) {
              n.closePopup(s.onClose),
                s.useRejections ? e(o) : t({ dismiss: o });
            },
            l = function (t) {
              n.closePopup(s.onClose), e(t);
            };
          s.timer &&
            (m.timeout = setTimeout(function () {
              return r("timer");
            }, s.timer));
          var u = function (n) {
            if (!(n = n || s.input)) return null;
            switch (n) {
              case "select":
              case "textarea":
              case "file":
                return J(B, o[n]);
              case "checkbox":
                return m.querySelector("." + o.checkbox + " input");
              case "radio":
                return (
                  m.querySelector("." + o.radio + " input:checked") ||
                  m.querySelector("." + o.radio + " input:first-child")
                );
              case "range":
                return m.querySelector("." + o.range + " input");
              default:
                return J(B, o.input);
            }
          };
          s.input &&
            setTimeout(function () {
              var n = u();
              n && K(n);
            }, 0);
          for (
            var f = function (t) {
                if ((s.showLoaderOnConfirm && n.showLoading(), s.preConfirm)) {
                  n.resetValidationError();
                  var e = Promise.resolve().then(function () {
                    return s.preConfirm(t, s.extraParams);
                  });
                  s.expectRejections
                    ? e.then(
                        function (n) {
                          return a(n || t);
                        },
                        function (t) {
                          n.hideLoading(), t && n.showValidationError(t);
                        }
                      )
                    : e.then(
                        function (e) {
                          en(O()) || !1 === e ? n.hideLoading() : a(e || t);
                        },
                        function (n) {
                          return l(n);
                        }
                      );
                } else a(t);
              },
              h = function (t) {
                var e = t || window.event,
                  o = e.target || e.srcElement,
                  a = Y(),
                  i = R(),
                  c = a && (a === o || a.contains(o)),
                  p = i && (i === o || i.contains(o));
                switch (e.type) {
                  case "click":
                    if (c && n.isVisible())
                      if ((n.disableButtons(), s.input)) {
                        var w = (function () {
                          var n = u();
                          if (!n) return null;
                          switch (s.input) {
                            case "checkbox":
                              return n.checked ? 1 : 0;
                            case "radio":
                              return n.checked ? n.value : null;
                            case "file":
                              return n.files.length ? n.files[0] : null;
                            default:
                              return s.inputAutoTrim ? n.value.trim() : n.value;
                          }
                        })();
                        if (s.inputValidator) {
                          n.disableInput();
                          var d = Promise.resolve().then(function () {
                            return s.inputValidator(w, s.extraParams);
                          });
                          s.expectRejections
                            ? d.then(
                                function () {
                                  n.enableButtons(), n.enableInput(), f(w);
                                },
                                function (t) {
                                  n.enableButtons(),
                                    n.enableInput(),
                                    t && n.showValidationError(t);
                                }
                              )
                            : d.then(
                                function (t) {
                                  n.enableButtons(),
                                    n.enableInput(),
                                    t ? n.showValidationError(t) : f(w);
                                },
                                function (n) {
                                  return l(n);
                                }
                              );
                        } else f(w);
                      } else f(!0);
                    else
                      p &&
                        n.isVisible() &&
                        (n.disableButtons(), r(n.DismissReason.cancel));
                }
              },
              v = m.querySelectorAll("button"),
              S = 0;
            S < v.length;
            S++
          )
            (v[S].onclick = h),
              (v[S].onmouseover = h),
              (v[S].onmouseout = h),
              (v[S].onmousedown = h);
          if (
            ((H().onclick = function () {
              r(n.DismissReason.close);
            }),
            s.toast)
          )
            m.onclick = function (t) {
              t.target !== m ||
                s.showConfirmButton ||
                s.showCancelButton ||
                (s.allowOutsideClick &&
                  (n.closePopup(s.onClose), r(n.DismissReason.backdrop)));
            };
          else {
            var A = !1;
            (m.onmousedown = function () {
              c.onmouseup = function (n) {
                (c.onmouseup = void 0), n.target === c && (A = !0);
              };
            }),
              (c.onmousedown = function () {
                m.onmouseup = function (n) {
                  (m.onmouseup = void 0),
                    (n.target === m || m.contains(n.target)) && (A = !0);
                };
              }),
              (c.onclick = function (t) {
                A
                  ? (A = !1)
                  : t.target === c &&
                    p(s.allowOutsideClick) &&
                    r(n.DismissReason.backdrop);
              });
          }
          var B = j(),
            L = Z(),
            T = Y(),
            I = R();
          s.reverseButtons
            ? T.parentNode.insertBefore(I, T)
            : T.parentNode.insertBefore(T, I);
          var $ = function (n, t) {
            for (var e = M(s.focusCancel), o = 0; o < e.length; o++) {
              (n += t) === e.length ? (n = 0) : -1 === n && (n = e.length - 1);
              var a = e[n];
              if (en(a)) return a.focus();
            }
          };
          s.toast && g && ((window.onkeydown = b), (g = !1)),
            s.toast ||
              g ||
              ((b = window.onkeydown),
              (g = !0),
              (window.onkeydown = function (t) {
                var e = t || window.event;
                if ("Enter" !== e.key || e.isComposing)
                  if ("Tab" === e.key) {
                    for (
                      var o = e.target || e.srcElement,
                        a = M(s.focusCancel),
                        i = -1,
                        l = 0;
                      l < a.length;
                      l++
                    )
                      if (o === a[l]) {
                        i = l;
                        break;
                      }
                    e.shiftKey ? $(i, -1) : $(i, 1),
                      e.stopPropagation(),
                      e.preventDefault();
                  } else
                    -1 !==
                    [
                      "ArrowLeft",
                      "ArrowRight",
                      "ArrowUp",
                      "ArrowDown",
                      "Left",
                      "Right",
                      "Up",
                      "Down",
                    ].indexOf(e.key)
                      ? document.activeElement === T && en(I)
                        ? I.focus()
                        : document.activeElement === I && en(T) && T.focus()
                      : ("Escape" !== e.key && "Esc" !== e.key) ||
                        !0 !== p(s.allowEscapeKey) ||
                        r(n.DismissReason.esc);
                else if (e.target === u()) {
                  if (-1 !== ["textarea", "file"].indexOf(s.input)) return;
                  n.clickConfirm(), e.preventDefault();
                }
              })),
            (n.hideLoading = n.disableLoading =
              function () {
                s.showConfirmButton || (nn(T), s.showCancelButton || nn(Z())),
                  F([m, L], o.loading),
                  m.removeAttribute("aria-busy"),
                  m.removeAttribute("data-loading"),
                  (T.disabled = !1),
                  (I.disabled = !1);
              }),
            (n.getTitle = function () {
              return z();
            }),
            (n.getContent = function () {
              return j();
            }),
            (n.getInput = function () {
              return u();
            }),
            (n.getImage = function () {
              return q();
            }),
            (n.getButtonsWrapper = function () {
              return N();
            }),
            (n.getActions = function () {
              return Z();
            }),
            (n.getConfirmButton = function () {
              return Y();
            }),
            (n.getCancelButton = function () {
              return R();
            }),
            (n.getFooter = function () {
              return D();
            }),
            (n.isLoading = function () {
              return U();
            }),
            (n.enableButtons = function () {
              (T.disabled = !1), (I.disabled = !1);
            }),
            (n.disableButtons = function () {
              (T.disabled = !0), (I.disabled = !0);
            }),
            (n.enableConfirmButton = function () {
              T.disabled = !1;
            }),
            (n.disableConfirmButton = function () {
              T.disabled = !0;
            }),
            (n.enableInput = function () {
              var n = u();
              if (!n) return !1;
              if ("radio" === n.type)
                for (
                  var t = n.parentNode.parentNode.querySelectorAll("input"),
                    e = 0;
                  e < t.length;
                  e++
                )
                  t[e].disabled = !1;
              else n.disabled = !1;
            }),
            (n.disableInput = function () {
              var n = u();
              if (!n) return !1;
              if (n && "radio" === n.type)
                for (
                  var t = n.parentNode.parentNode.querySelectorAll("input"),
                    e = 0;
                  e < t.length;
                  e++
                )
                  t[e].disabled = !0;
              else n.disabled = !0;
            }),
            (n.showValidationError = function (n) {
              var t = O();
              t.innerHTML = n;
              var e = window.getComputedStyle(m);
              (t.style.marginLeft = "-" + e.getPropertyValue("padding-left")),
                (t.style.marginRight =
                  "-" + e.getPropertyValue("padding-right")),
                G(t);
              var a = u();
              a &&
                (a.setAttribute("aria-invalid", !0),
                a.setAttribute("aria-describedBy", o.validationerror),
                K(a),
                Q(a, o.inputerror));
            }),
            (n.resetValidationError = function () {
              var n = O();
              nn(n);
              var t = u();
              t &&
                (t.removeAttribute("aria-invalid"),
                t.removeAttribute("aria-describedBy"),
                F(t, o.inputerror));
            }),
            (n.getProgressSteps = function () {
              return s.progressSteps;
            }),
            (n.setProgressSteps = function (n) {
              (s.progressSteps = n), x(s);
            }),
            (n.showProgressSteps = function () {
              G(V());
            }),
            (n.hideProgressSteps = function () {
              nn(V());
            }),
            n.enableButtons(),
            n.hideLoading(),
            n.resetValidationError(),
            s.input && Q(document.body, o["has-input"]);
          for (
            var _ = [
                "input",
                "file",
                "range",
                "select",
                "radio",
                "checkbox",
                "textarea",
              ],
              tn = void 0,
              on = 0;
            on < _.length;
            on++
          ) {
            var sn = o[_[on]],
              rn = J(B, sn);
            if ((tn = u(_[on]))) {
              for (var ln in tn.attributes)
                if (tn.attributes.hasOwnProperty(ln)) {
                  var cn = tn.attributes[ln].name;
                  "type" !== cn && "value" !== cn && tn.removeAttribute(cn);
                }
              for (var pn in s.inputAttributes)
                tn.setAttribute(pn, s.inputAttributes[pn]);
            }
            (rn.className = sn), s.inputClass && Q(rn, s.inputClass), nn(rn);
          }
          var wn,
            un,
            dn,
            fn,
            mn,
            bn = void 0;
          switch (s.input) {
            case "text":
            case "email":
            case "password":
            case "number":
            case "tel":
            case "url":
              ((tn = J(B, o.input)).value = s.inputValue),
                (tn.placeholder = s.inputPlaceholder),
                (tn.type = s.input),
                G(tn);
              break;
            case "file":
              ((tn = J(B, o.file)).placeholder = s.inputPlaceholder),
                (tn.type = s.input),
                G(tn);
              break;
            case "range":
              var gn = J(B, o.range),
                hn = gn.querySelector("input"),
                xn = gn.querySelector("output");
              (hn.value = s.inputValue),
                (hn.type = s.input),
                (xn.value = s.inputValue),
                G(gn);
              break;
            case "select":
              var kn = J(B, o.select);
              if (((kn.innerHTML = ""), s.inputPlaceholder)) {
                var yn = document.createElement("option");
                (yn.innerHTML = s.inputPlaceholder),
                  (yn.value = ""),
                  (yn.disabled = !0),
                  (yn.selected = !0),
                  kn.appendChild(yn);
              }
              bn = function (n) {
                n.forEach(function (n) {
                  var t = d(n, 2),
                    e = t[0],
                    o = t[1],
                    a = document.createElement("option");
                  (a.value = e),
                    (a.innerHTML = o),
                    s.inputValue.toString() === e.toString() &&
                      (a.selected = !0),
                    kn.appendChild(a);
                }),
                  G(kn),
                  kn.focus();
              };
              break;
            case "radio":
              var vn = J(B, o.radio);
              (vn.innerHTML = ""),
                (bn = function (n) {
                  n.forEach(function (n) {
                    var t = d(n, 2),
                      e = t[0],
                      a = t[1],
                      r = document.createElement("input"),
                      i = document.createElement("label");
                    (r.type = "radio"),
                      (r.name = o.radio),
                      (r.value = e),
                      s.inputValue.toString() === e.toString() &&
                        (r.checked = !0),
                      (i.innerHTML = a),
                      i.insertBefore(r, i.firstChild),
                      vn.appendChild(i);
                  }),
                    G(vn);
                  var t = vn.querySelectorAll("input");
                  t.length && t[0].focus();
                });
              break;
            case "checkbox":
              var Cn = J(B, o.checkbox),
                Sn = u("checkbox");
              (Sn.type = "checkbox"),
                (Sn.value = 1),
                (Sn.id = o.checkbox),
                (Sn.checked = Boolean(s.inputValue));
              var An = Cn.getElementsByTagName("span");
              An.length && Cn.removeChild(An[0]),
                ((An = document.createElement("span")).innerHTML =
                  s.inputPlaceholder),
                Cn.appendChild(An),
                G(Cn);
              break;
            case "textarea":
              var Bn = J(B, o.textarea);
              (Bn.value = s.inputValue),
                (Bn.placeholder = s.inputPlaceholder),
                G(Bn);
              break;
            case null:
              break;
            default:
              i(
                'Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' +
                  s.input +
                  '"'
              );
          }
          if ("select" === s.input || "radio" === s.input) {
            var En = function (n) {
              return bn(
                ((e = []),
                (t = n) instanceof Map
                  ? t.forEach(function (n, t) {
                      e.push([t, n]);
                    })
                  : Object.keys(t).forEach(function (n) {
                      e.push([n, t[n]]);
                    }),
                e)
              );
              var t, e;
            };
            s.inputOptions instanceof Promise
              ? (n.showLoading(),
                s.inputOptions.then(function (t) {
                  n.hideLoading(), En(t);
                }))
              : "object" === w(s.inputOptions)
              ? En(s.inputOptions)
              : i(
                  "Unexpected type of inputOptions! Expected object, Map or Promise, got " +
                    w(s.inputOptions)
                );
          }
          (wn = s.animation),
            (un = s.onBeforeOpen),
            (dn = s.onOpen),
            (fn = E()),
            (mn = P()),
            null !== un && "function" == typeof un && un(mn),
            wn ? (Q(mn, o.show), Q(fn, o.fade), F(mn, o.hide)) : F(mn, o.fade),
            G(mn),
            (fn.style.overflowY = "hidden"),
            an && !W(mn, o.noanimation)
              ? mn.addEventListener(an, function n() {
                  mn.removeEventListener(an, n), (fn.style.overflowY = "auto");
                })
              : (fn.style.overflowY = "auto"),
            Q([document.documentElement, document.body, fn], o.shown),
            X() && (k(), y()),
            (C.previousActiveElement = document.activeElement),
            null !== dn &&
              "function" == typeof dn &&
              setTimeout(function () {
                dn(mn);
              }),
            s.toast ||
              (p(s.allowEnterKey)
                ? s.focusCancel && en(I)
                  ? I.focus()
                  : s.focusConfirm && en(T)
                  ? T.focus()
                  : $(-1, 1)
                : document.activeElement && document.activeElement.blur()),
            (E().scrollTop = 0);
        });
      }
    };
  (v.isVisible = function () {
    return !!P();
  }),
    (v.queue = function (n) {
      m = n;
      var t = function () {
          (m = []), document.body.removeAttribute("data-swal2-queue-step");
        },
        e = [];
      return new Promise(function (n, o) {
        !(function o(a, s) {
          a < m.length
            ? (document.body.setAttribute("data-swal2-queue-step", a),
              v(m[a]).then(function (r) {
                void 0 !== r.value
                  ? (e.push(r.value), o(a + 1, s))
                  : (t(), n({ dismiss: r.dismiss }));
              }))
            : (t(), n({ value: e }));
        })(0);
      });
    }),
    (v.getQueueStep = function () {
      return document.body.getAttribute("data-swal2-queue-step");
    }),
    (v.insertQueueStep = function (n, t) {
      return t && t < m.length ? m.splice(t, 0, n) : m.push(n);
    }),
    (v.deleteQueueStep = function (n) {
      void 0 !== m[n] && m.splice(n, 1);
    }),
    (v.close =
      v.closePopup =
      v.closeModal =
      v.closeToast =
        function (n) {
          var t = E(),
            e = P();
          if (e) {
            F(e, o.show),
              Q(e, o.hide),
              clearTimeout(e.timeout),
              $() || (sn(), (window.onkeydown = b), (g = !1));
            var a = function () {
              t.parentNode && t.parentNode.removeChild(t),
                F(
                  [document.documentElement, document.body],
                  [o.shown, o["no-backdrop"], o["has-input"], o["toast-shown"]]
                ),
                X() &&
                  (null !== C.previousBodyPadding &&
                    ((document.body.style.paddingRight = C.previousBodyPadding),
                    (C.previousBodyPadding = null)),
                  (function () {
                    if (W(document.body, o.iosfix)) {
                      var n = parseInt(document.body.style.top, 10);
                      F(document.body, o.iosfix),
                        (document.body.style.top = ""),
                        (document.body.scrollTop = -1 * n);
                    }
                  })());
            };
            an && !W(e, o.noanimation)
              ? e.addEventListener(an, function n() {
                  e.removeEventListener(an, n), W(e, o.hide) && a();
                })
              : a(),
              null !== n &&
                "function" == typeof n &&
                setTimeout(function () {
                  n(e);
                });
          }
        }),
    (v.clickConfirm = function () {
      return Y().click();
    }),
    (v.clickCancel = function () {
      return R().click();
    }),
    (v.showLoading = v.enableLoading =
      function () {
        var n = P();
        n || v(""), (n = P());
        var t = Z(),
          e = Y(),
          a = R();
        G(t),
          G(e),
          Q([n, t], o.loading),
          (e.disabled = !0),
          (a.disabled = !0),
          n.setAttribute("data-loading", !0),
          n.setAttribute("aria-busy", !0),
          n.focus();
      }),
    (v.isValidParameter = function (t) {
      return n.hasOwnProperty(t) || "extraParams" === t;
    }),
    (v.isDeprecatedParameter = function (n) {
      return -1 !== t.indexOf(n);
    }),
    (v.setDefaults = function (n) {
      if (!n || "object" !== (void 0 === n ? "undefined" : w(n)))
        return i(
          "the argument for setDefaults() is required and has to be a object"
        );
      for (var t in (h(n), n)) v.isValidParameter(t) && (f[t] = n[t]);
    }),
    (v.resetDefaults = function () {
      f = u({}, n);
    }),
    (v.adaptInputValidator = function (n) {
      return function (t, e) {
        return n.call(this, t, e).then(
          function () {},
          function (n) {
            return n;
          }
        );
      };
    }),
    (v.DismissReason = Object.freeze({
      cancel: "cancel",
      backdrop: "overlay",
      close: "close",
      esc: "esc",
      timer: "timer",
    })),
    (v.noop = function () {}),
    (v.version = "7.12.15"),
    (v.default = v),
    "undefined" != typeof window &&
      "object" === w(window._swalDefaults) &&
      v.setDefaults(window._swalDefaults);
  var C = { previousActiveElement: null, previousBodyPadding: null },
    S = function () {
      return "undefined" == typeof window || "undefined" == typeof document;
    },
    A = function (n) {
      var t = E();
      if (
        (t &&
          (t.parentNode.removeChild(t),
          F(
            [document.documentElement, document.body],
            [o["no-backdrop"], o["has-input"], o["toast-shown"]]
          )),
        !S())
      ) {
        var e = document.createElement("div");
        (e.className = o.container),
          (e.innerHTML = B),
          ("string" == typeof n.target
            ? document.querySelector(n.target)
            : n.target
          ).appendChild(e);
        var a = P(),
          s = j(),
          r = J(s, o.input),
          l = J(s, o.file),
          c = s.querySelector("." + o.range + " input"),
          p = s.querySelector("." + o.range + " output"),
          w = J(s, o.select),
          u = s.querySelector("." + o.checkbox + " input"),
          d = J(s, o.textarea);
        a.setAttribute("role", n.toast ? "alert" : "dialog"),
          a.setAttribute("aria-live", n.toast ? "polite" : "assertive"),
          n.toast || a.setAttribute("aria-modal", "true");
        var f = function () {
          v.isVisible() && v.resetValidationError();
        };
        return (
          (r.oninput = f),
          (l.onchange = f),
          (w.onchange = f),
          (u.onchange = f),
          (d.oninput = f),
          (c.oninput = function () {
            f(), (p.value = c.value);
          }),
          (c.onchange = function () {
            f(), (c.nextSibling.value = c.value);
          }),
          a
        );
      }
      i("SweetAlert2 requires document to initialize");
    },
    B = (
      '\n <div aria-labelledby="' +
      o.title +
      '" aria-describedby="' +
      o.content +
      '" class="' +
      o.popup +
      '" tabindex="-1">\n   <div class="' +
      o.header +
      '">\n     <ul class="' +
      o.progresssteps +
      '"></ul>\n     <div class="' +
      o.icon +
      " " +
      a.error +
      '">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="' +
      o.icon +
      " " +
      a.question +
      '">?</div>\n     <div class="' +
      o.icon +
      " " +
      a.warning +
      '">!</div>\n     <div class="' +
      o.icon +
      " " +
      a.info +
      '">i</div>\n     <div class="' +
      o.icon +
      " " +
      a.success +
      '">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="' +
      o.image +
      '" />\n     <h2 class="' +
      o.title +
      '" id="' +
      o.title +
      '"></h2>\n     <button type="button" class="' +
      o.close +
      '">×</button>\n   </div>\n   <div class="' +
      o.content +
      '">\n     <div id="' +
      o.content +
      '"></div>\n     <input class="' +
      o.input +
      '" />\n     <input type="file" class="' +
      o.file +
      '" />\n     <div class="' +
      o.range +
      '">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="' +
      o.select +
      '"></select>\n     <div class="' +
      o.radio +
      '"></div>\n     <label for="' +
      o.checkbox +
      '" class="' +
      o.checkbox +
      '">\n       <input type="checkbox" />\n     </label>\n     <textarea class="' +
      o.textarea +
      '"></textarea>\n     <div class="' +
      o.validationerror +
      '" id="' +
      o.validationerror +
      '"></div>\n   </div>\n   <div class="' +
      o.actions +
      '">\n     <button type="button" class="' +
      o.confirm +
      '">OK</button>\n     <button type="button" class="' +
      o.cancel +
      '">Cancel</button>\n   </div>\n   <div class="' +
      o.footer +
      '">\n   </div>\n </div>\n'
    ).replace(/(^|\n)\s*/g, ""),
    E = function () {
      return document.body.querySelector("." + o.container);
    },
    P = function () {
      return E() ? E().querySelector("." + o.popup) : null;
    },
    L = function () {
      return P().querySelectorAll("." + o.icon);
    },
    T = function (n) {
      return E() ? E().querySelector("." + n) : null;
    },
    z = function () {
      return T(o.title);
    },
    j = function () {
      return T(o.content);
    },
    q = function () {
      return T(o.image);
    },
    V = function () {
      return T(o.progresssteps);
    },
    O = function () {
      return T(o.validationerror);
    },
    Y = function () {
      return T(o.confirm);
    },
    R = function () {
      return T(o.cancel);
    },
    N = function () {
      return (
        c(
          "swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"
        ),
        T(o.actions)
      );
    },
    Z = function () {
      return T(o.actions);
    },
    D = function () {
      return T(o.footer);
    },
    H = function () {
      return T(o.close);
    },
    M = function () {
      var n = Array.prototype.slice
          .call(
            P().querySelectorAll(
              '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
            )
          )
          .sort(function (n, t) {
            return (n = parseInt(n.getAttribute("tabindex"))) >
              (t = parseInt(t.getAttribute("tabindex")))
              ? 1
              : n < t
              ? -1
              : 0;
          }),
        t = Array.prototype.slice.call(
          P().querySelectorAll(
            'button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'
          )
        );
      return (function (n) {
        for (var t = [], e = 0; e < n.length; e++)
          -1 === t.indexOf(n[e]) && t.push(n[e]);
        return t;
      })(n.concat(t));
    },
    I = function (n, t) {
      if (!n) return nn(t);
      if ("object" === (void 0 === n ? "undefined" : w(n)))
        if (((t.innerHTML = ""), 0 in n))
          for (var e = 0; e in n; e++) t.appendChild(n[e].cloneNode(!0));
        else t.appendChild(n.cloneNode(!0));
      else n && (t.innerHTML = n);
      G(t);
    },
    X = function () {
      return !document.body.classList.contains(o["toast-shown"]);
    },
    $ = function () {
      return document.body.classList.contains(o["toast-shown"]);
    },
    U = function () {
      return P().hasAttribute("data-loading");
    },
    W = function (n, t) {
      return !!n.classList && n.classList.contains(t);
    },
    K = function (n) {
      if ((n.focus(), "file" !== n.type)) {
        var t = n.value;
        (n.value = ""), (n.value = t);
      }
    },
    _ = function (n, t, e) {
      n &&
        t &&
        ("string" == typeof t && (t = t.split(/\s+/).filter(Boolean)),
        t.forEach(function (t) {
          n.forEach
            ? n.forEach(function (n) {
                e ? n.classList.add(t) : n.classList.remove(t);
              })
            : e
            ? n.classList.add(t)
            : n.classList.remove(t);
        }));
    },
    Q = function (n, t) {
      _(n, t, !0);
    },
    F = function (n, t) {
      _(n, t, !1);
    },
    J = function (n, t) {
      for (var e = 0; e < n.childNodes.length; e++)
        if (W(n.childNodes[e], t)) return n.childNodes[e];
    },
    G = function (n) {
      (n.style.opacity = ""),
        (n.style.display = n.id === o.content ? "block" : "flex");
    },
    nn = function (n) {
      (n.style.opacity = ""), (n.style.display = "none");
    },
    tn = function (n) {
      for (; n.firstChild; ) n.removeChild(n.firstChild);
    },
    en = function (n) {
      return (
        n && (n.offsetWidth || n.offsetHeight || n.getClientRects().length)
      );
    },
    on = function (n, t) {
      n.style.removeProperty
        ? n.style.removeProperty(t)
        : n.style.removeAttribute(t);
    },
    an = (function () {
      if (S()) return !1;
      var n = document.createElement("div"),
        t = {
          WebkitAnimation: "webkitAnimationEnd",
          OAnimation: "oAnimationEnd oanimationend",
          animation: "animationend",
        };
      for (var e in t)
        if (t.hasOwnProperty(e) && void 0 !== n.style[e]) return t[e];
      return !1;
    })(),
    sn = function () {
      if (C.previousActiveElement && C.previousActiveElement.focus) {
        var n = window.scrollX,
          t = window.scrollY;
        C.previousActiveElement.focus(),
          void 0 !== n && void 0 !== t && window.scrollTo(n, t);
      }
    },
    rn = function () {
      if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
      var n = document.createElement("div");
      (n.style.width = "50px"),
        (n.style.height = "50px"),
        (n.style.overflow = "scroll"),
        document.body.appendChild(n);
      var t = n.offsetWidth - n.clientWidth;
      return document.body.removeChild(n), t;
    };
  return (
    (function () {
      var n =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      if (S()) return !1;
      var t = document.head || document.getElementsByTagName("head")[0],
        e = document.createElement("style");
      (e.type = "text/css"),
        t.appendChild(e),
        e.styleSheet
          ? (e.styleSheet.cssText = n)
          : e.appendChild(document.createTextNode(n));
    })(
      "@-webkit-keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes swal2-show {\n  0% {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7); }\n  45% {\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05); }\n  80% {\n    -webkit-transform: scale(0.95);\n            transform: scale(0.95); }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@-webkit-keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@keyframes swal2-hide {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5);\n    opacity: 0; } }\n\n@-webkit-keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 19px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 17px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 35px;\n    left: -6px;\n    width: 50px; }\n  84% {\n    top: 48px;\n    left: 21px;\n    width: 17px; }\n  100% {\n    top: 45px;\n    left: 14px;\n    width: 25px; } }\n\n@keyframes swal2-animate-success-line-tip {\n  0% {\n    top: 19px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 17px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 35px;\n    left: -6px;\n    width: 50px; }\n  84% {\n    top: 48px;\n    left: 21px;\n    width: 17px; }\n  100% {\n    top: 45px;\n    left: 14px;\n    width: 25px; } }\n\n@-webkit-keyframes swal2-animate-success-line-long {\n  0% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  65% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  84% {\n    top: 35px;\n    right: 0;\n    width: 55px; }\n  100% {\n    top: 38px;\n    right: 8px;\n    width: 47px; } }\n\n@keyframes swal2-animate-success-line-long {\n  0% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  65% {\n    top: 54px;\n    right: 46px;\n    width: 0; }\n  84% {\n    top: 35px;\n    right: 0;\n    width: 55px; }\n  100% {\n    top: 38px;\n    right: 8px;\n    width: 47px; } }\n\n@-webkit-keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@keyframes swal2-rotate-success-circular-line {\n  0% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  5% {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n  12% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); }\n  100% {\n    -webkit-transform: rotate(-405deg);\n            transform: rotate(-405deg); } }\n\n@-webkit-keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -6px;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@keyframes swal2-animate-error-x-mark {\n  0% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  50% {\n    margin-top: 26px;\n    -webkit-transform: scale(0.4);\n            transform: scale(0.4);\n    opacity: 0; }\n  80% {\n    margin-top: -6px;\n    -webkit-transform: scale(1.15);\n            transform: scale(1.15); }\n  100% {\n    margin-top: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\n@keyframes swal2-animate-error-icon {\n  0% {\n    -webkit-transform: rotateX(100deg);\n            transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1; } }\n\nbody.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-actions {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    height: 2.2em; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-loading {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-input {\n    height: 2em;\n    margin: .3125em auto;\n    font-size: 1em; }\n  body.swal2-toast-shown.swal2-has-input > .swal2-container > .swal2-toast .swal2-validationerror {\n    font-size: 1em; }\n\nbody.swal2-toast-shown > .swal2-container {\n  position: fixed;\n  background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-shown {\n    background-color: transparent; }\n  body.swal2-toast-shown > .swal2-container.swal2-top {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-top-end, body.swal2-toast-shown > .swal2-container.swal2-top-right {\n    top: 0;\n    right: 0;\n    bottom: auto;\n    left: auto; }\n  body.swal2-toast-shown > .swal2-container.swal2-top-start, body.swal2-toast-shown > .swal2-container.swal2-top-left {\n    top: 0;\n    right: auto;\n    bottom: auto;\n    left: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-center-start, body.swal2-toast-shown > .swal2-container.swal2-center-left {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center {\n    top: 50%;\n    right: auto;\n    bottom: auto;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-center-end, body.swal2-toast-shown > .swal2-container.swal2-center-right {\n    top: 50%;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-start, body.swal2-toast-shown > .swal2-container.swal2-bottom-left {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0; }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom {\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-toast-shown > .swal2-container.swal2-bottom-end, body.swal2-toast-shown > .swal2-container.swal2-bottom-right {\n    top: auto;\n    right: 0;\n    bottom: 0;\n    left: auto; }\n\n.swal2-popup.swal2-toast {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: auto;\n  padding: 0.625em;\n  -webkit-box-shadow: 0 0 10px #d9d9d9;\n          box-shadow: 0 0 10px #d9d9d9;\n  overflow-y: hidden; }\n  .swal2-popup.swal2-toast .swal2-header {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .swal2-popup.swal2-toast .swal2-title {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    margin: 0 .6em;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-close {\n    position: initial; }\n  .swal2-popup.swal2-toast .swal2-content {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    font-size: 1em; }\n  .swal2-popup.swal2-toast .swal2-icon {\n    width: 32px;\n    min-width: 32px;\n    height: 32px;\n    margin: 0; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-info, .swal2-popup.swal2-toast .swal2-icon.swal2-warning, .swal2-popup.swal2-toast .swal2-icon.swal2-question {\n      font-size: 26px;\n      line-height: 32px; }\n    .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      top: 14px;\n      width: 22px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 5px; }\n      .swal2-popup.swal2-toast .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 5px; }\n  .swal2-popup.swal2-toast .swal2-actions {\n    height: auto;\n    margin: 0 .3125em; }\n  .swal2-popup.swal2-toast .swal2-styled {\n    margin: 0 .3125em;\n    padding: .3125em .625em;\n    font-size: 1em; }\n    .swal2-popup.swal2-toast .swal2-styled:focus {\n      -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 1px #fff, 0 0 0 2px rgba(50, 100, 150, 0.4); }\n  .swal2-popup.swal2-toast .swal2-success {\n    border-color: #a5dc86; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 32px;\n      height: 45px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -4px;\n        left: -15px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 32px 32px;\n                transform-origin: 32px 32px;\n        border-radius: 64px 0 0 64px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -4px;\n        left: 15px;\n        -webkit-transform-origin: 0 32px;\n                transform-origin: 0 32px;\n        border-radius: 0 64px 64px 0; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-ring {\n      width: 32px;\n      height: 32px; }\n    .swal2-popup.swal2-toast .swal2-success .swal2-success-fix {\n      top: 0;\n      left: 7px;\n      width: 7px;\n      height: 43px; }\n    .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'] {\n      height: 5px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 18px;\n        left: 3px;\n        width: 12px; }\n      .swal2-popup.swal2-toast .swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: 15px;\n        right: 3px;\n        width: 22px; }\n  .swal2-popup.swal2-toast.swal2-show {\n    -webkit-animation: showSweetToast .5s;\n            animation: showSweetToast .5s; }\n  .swal2-popup.swal2-toast.swal2-hide {\n    -webkit-animation: hideSweetToast .2s forwards;\n            animation: hideSweetToast .2s forwards; }\n  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip {\n    -webkit-animation: animate-toast-success-tip .75s;\n            animation: animate-toast-success-tip .75s; }\n  .swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long {\n    -webkit-animation: animate-toast-success-long .75s;\n            animation: animate-toast-success-long .75s; }\n\n@-webkit-keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@keyframes showSweetToast {\n  0% {\n    -webkit-transform: translateY(-10px) rotateZ(2deg);\n            transform: translateY(-10px) rotateZ(2deg);\n    opacity: 0; }\n  33% {\n    -webkit-transform: translateY(0) rotateZ(-2deg);\n            transform: translateY(0) rotateZ(-2deg);\n    opacity: .5; }\n  66% {\n    -webkit-transform: translateY(5px) rotateZ(2deg);\n            transform: translateY(5px) rotateZ(2deg);\n    opacity: .7; }\n  100% {\n    -webkit-transform: translateY(0) rotateZ(0);\n            transform: translateY(0) rotateZ(0);\n    opacity: 1; } }\n\n@-webkit-keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@keyframes hideSweetToast {\n  0% {\n    opacity: 1; }\n  33% {\n    opacity: .5; }\n  100% {\n    -webkit-transform: rotateZ(1deg);\n            transform: rotateZ(1deg);\n    opacity: 0; } }\n\n@-webkit-keyframes animate-toast-success-tip {\n  0% {\n    top: 9px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 2px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 10px;\n    left: -4px;\n    width: 26px; }\n  84% {\n    top: 17px;\n    left: 12px;\n    width: 8px; }\n  100% {\n    top: 18px;\n    left: 3px;\n    width: 12px; } }\n\n@keyframes animate-toast-success-tip {\n  0% {\n    top: 9px;\n    left: 1px;\n    width: 0; }\n  54% {\n    top: 2px;\n    left: 2px;\n    width: 0; }\n  70% {\n    top: 10px;\n    left: -4px;\n    width: 26px; }\n  84% {\n    top: 17px;\n    left: 12px;\n    width: 8px; }\n  100% {\n    top: 18px;\n    left: 3px;\n    width: 12px; } }\n\n@-webkit-keyframes animate-toast-success-long {\n  0% {\n    top: 26px;\n    right: 22px;\n    width: 0; }\n  65% {\n    top: 20px;\n    right: 15px;\n    width: 0; }\n  84% {\n    top: 15px;\n    right: 0;\n    width: 18px; }\n  100% {\n    top: 15px;\n    right: 3px;\n    width: 22px; } }\n\n@keyframes animate-toast-success-long {\n  0% {\n    top: 26px;\n    right: 22px;\n    width: 0; }\n  65% {\n    top: 20px;\n    right: 15px;\n    width: 0; }\n  84% {\n    top: 15px;\n    right: 0;\n    width: 18px; }\n  100% {\n    top: 15px;\n    right: 3px;\n    width: 22px; } }\n\nhtml.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown),\nbody.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) {\n  height: auto;\n  overflow-y: hidden; }\n\nbody.swal2-no-backdrop .swal2-shown {\n  top: auto;\n  right: auto;\n  bottom: auto;\n  left: auto;\n  background-color: transparent; }\n  body.swal2-no-backdrop .swal2-shown > .swal2-modal {\n    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top {\n    top: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-start, body.swal2-no-backdrop .swal2-shown.swal2-top-left {\n    top: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-top-end, body.swal2-no-backdrop .swal2-shown.swal2-top-right {\n    top: 0;\n    right: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-center {\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-start, body.swal2-no-backdrop .swal2-shown.swal2-center-left {\n    top: 50%;\n    left: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-center-end, body.swal2-no-backdrop .swal2-shown.swal2-center-right {\n    top: 50%;\n    right: 0;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom {\n    bottom: 0;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-start, body.swal2-no-backdrop .swal2-shown.swal2-bottom-left {\n    bottom: 0;\n    left: 0; }\n  body.swal2-no-backdrop .swal2-shown.swal2-bottom-end, body.swal2-no-backdrop .swal2-shown.swal2-bottom-right {\n    right: 0;\n    bottom: 0; }\n\n.swal2-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch; }\n  .swal2-container.swal2-top {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .swal2-container.swal2-top-start, .swal2-container.swal2-top-left {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-top-end, .swal2-container.swal2-top-right {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-container.swal2-center-start, .swal2-container.swal2-center-left {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-center-end, .swal2-container.swal2-center-right {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-bottom {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n  .swal2-container.swal2-bottom-start, .swal2-container.swal2-bottom-left {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .swal2-container.swal2-bottom-end, .swal2-container.swal2-bottom-right {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .swal2-container.swal2-grow-fullscreen > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-item-align: stretch;\n        align-self: stretch;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-row > .swal2-modal {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .swal2-container.swal2-grow-column {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .swal2-container.swal2-grow-column.swal2-top, .swal2-container.swal2-grow-column.swal2-center, .swal2-container.swal2-grow-column.swal2-bottom {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n    .swal2-container.swal2-grow-column.swal2-top-start, .swal2-container.swal2-grow-column.swal2-center-start, .swal2-container.swal2-grow-column.swal2-bottom-start, .swal2-container.swal2-grow-column.swal2-top-left, .swal2-container.swal2-grow-column.swal2-center-left, .swal2-container.swal2-grow-column.swal2-bottom-left {\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .swal2-container.swal2-grow-column.swal2-top-end, .swal2-container.swal2-grow-column.swal2-center-end, .swal2-container.swal2-grow-column.swal2-bottom-end, .swal2-container.swal2-grow-column.swal2-top-right, .swal2-container.swal2-grow-column.swal2-center-right, .swal2-container.swal2-grow-column.swal2-bottom-right {\n      -webkit-box-align: end;\n          -ms-flex-align: end;\n              align-items: flex-end; }\n    .swal2-container.swal2-grow-column > .swal2-modal {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n  .swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right) > .swal2-modal {\n    margin: auto; }\n  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n    .swal2-container .swal2-modal {\n      margin: 0 !important; } }\n  .swal2-container.swal2-fade {\n    -webkit-transition: background-color .1s;\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-popup {\n  display: none;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 32em;\n  max-width: 100%;\n  padding: 1.25em;\n  border-radius: 0.3125em;\n  background: #fff;\n  font-family: inherit;\n  font-size: 1rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .swal2-popup:focus {\n    outline: none; }\n  .swal2-popup.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-popup .swal2-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .swal2-popup .swal2-title {\n    display: block;\n    position: relative;\n    max-width: 100%;\n    margin: 0 0 0.4em;\n    padding: 0;\n    color: #595959;\n    font-size: 1.875em;\n    font-weight: 600;\n    text-align: center;\n    text-transform: none;\n    word-wrap: break-word; }\n  .swal2-popup .swal2-actions {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 1.25em auto 0; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4; }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.1)), to(rgba(0, 0, 0, 0.1)));\n      background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)); }\n    .swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active {\n      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(rgba(0, 0, 0, 0.2)));\n      background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)); }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm {\n      width: 2.5em;\n      height: 2.5em;\n      margin: .46875em;\n      padding: 0;\n      border: .25em solid transparent;\n      border-radius: 100%;\n      border-color: transparent;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n              animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n    .swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel {\n      margin-right: 30px;\n      margin-left: 30px; }\n    .swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      width: 15px;\n      height: 15px;\n      margin-left: 5px;\n      border: 3px solid #999999;\n      border-radius: 50%;\n      border-right-color: transparent;\n      -webkit-box-shadow: 1px 1px 1px #fff;\n              box-shadow: 1px 1px 1px #fff;\n      content: '';\n      -webkit-animation: swal2-rotate-loading 1.5s linear 0s infinite normal;\n              animation: swal2-rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-popup .swal2-styled {\n    margin: 0 .3125em;\n    padding: .625em 2em;\n    font-weight: 500;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n    .swal2-popup .swal2-styled:not([disabled]) {\n      cursor: pointer; }\n    .swal2-popup .swal2-styled.swal2-confirm {\n      border: 0;\n      border-radius: 0.25em;\n      background-color: #3085d6;\n      color: #fff;\n      font-size: 1.0625em; }\n    .swal2-popup .swal2-styled.swal2-cancel {\n      border: 0;\n      border-radius: 0.25em;\n      background-color: #aaa;\n      color: #fff;\n      font-size: 1.0625em; }\n    .swal2-popup .swal2-styled:focus {\n      outline: none;\n      -webkit-box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4);\n              box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n    .swal2-popup .swal2-styled::-moz-focus-inner {\n      border: 0; }\n  .swal2-popup .swal2-footer {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 1.25em 0 0;\n    padding-top: 1em;\n    border-top: 1px solid #eee;\n    color: #545454;\n    font-size: 1em; }\n  .swal2-popup .swal2-image {\n    max-width: 100%;\n    margin: 1.25em auto; }\n  .swal2-popup .swal2-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 1.2em;\n    min-width: 1.2em;\n    height: 1.2em;\n    margin: 0;\n    padding: 0;\n    -webkit-transition: color 0.1s ease-out;\n    transition: color 0.1s ease-out;\n    border: none;\n    border-radius: 0;\n    background: transparent;\n    color: #cccccc;\n    font-family: serif;\n    font-size: calc(2.5em - 0.25em);\n    line-height: 1.2em;\n    cursor: pointer; }\n    .swal2-popup .swal2-close:hover {\n      -webkit-transform: none;\n              transform: none;\n      color: #f27474; }\n  .swal2-popup > .swal2-input,\n  .swal2-popup > .swal2-file,\n  .swal2-popup > .swal2-textarea,\n  .swal2-popup > .swal2-select,\n  .swal2-popup > .swal2-radio,\n  .swal2-popup > .swal2-checkbox {\n    display: none; }\n  .swal2-popup .swal2-content {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    margin: 0;\n    padding: 0;\n    color: #545454;\n    font-size: 1.125em;\n    font-weight: 300;\n    line-height: normal;\n    word-wrap: break-word; }\n  .swal2-popup #swal2-content {\n    text-align: center; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea,\n  .swal2-popup .swal2-select,\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    margin: 1em auto; }\n  .swal2-popup .swal2-input,\n  .swal2-popup .swal2-file,\n  .swal2-popup .swal2-textarea {\n    width: 100%;\n    -webkit-transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, -webkit-box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s;\n    transition: border-color .3s, box-shadow .3s, -webkit-box-shadow .3s;\n    border: 1px solid #d9d9d9;\n    border-radius: 0.1875em;\n    font-size: 1.125em;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n    .swal2-popup .swal2-input.swal2-inputerror,\n    .swal2-popup .swal2-file.swal2-inputerror,\n    .swal2-popup .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      -webkit-box-shadow: 0 0 2px #f27474 !important;\n              box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-popup .swal2-input:focus,\n    .swal2-popup .swal2-file:focus,\n    .swal2-popup .swal2-textarea:focus {\n      border: 1px solid #b4dbed;\n      outline: none;\n      -webkit-box-shadow: 0 0 3px #c4e6f5;\n              box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-popup .swal2-input::-webkit-input-placeholder,\n    .swal2-popup .swal2-file::-webkit-input-placeholder,\n    .swal2-popup .swal2-textarea::-webkit-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input:-ms-input-placeholder,\n    .swal2-popup .swal2-file:-ms-input-placeholder,\n    .swal2-popup .swal2-textarea:-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::-ms-input-placeholder,\n    .swal2-popup .swal2-file::-ms-input-placeholder,\n    .swal2-popup .swal2-textarea::-ms-input-placeholder {\n      color: #cccccc; }\n    .swal2-popup .swal2-input::placeholder,\n    .swal2-popup .swal2-file::placeholder,\n    .swal2-popup .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-popup .swal2-range input {\n    width: 80%; }\n  .swal2-popup .swal2-range output {\n    width: 20%;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-popup .swal2-range input,\n  .swal2-popup .swal2-range output {\n    height: 2.625em;\n    margin: 1em auto;\n    padding: 0;\n    font-size: 1.125em;\n    line-height: 2.625em; }\n  .swal2-popup .swal2-input {\n    height: 2.625em;\n    padding: 0.75em; }\n    .swal2-popup .swal2-input[type='number'] {\n      max-width: 10em; }\n  .swal2-popup .swal2-file {\n    font-size: 1.125em; }\n  .swal2-popup .swal2-textarea {\n    height: 6.75em;\n    padding: 0.75em; }\n  .swal2-popup .swal2-select {\n    min-width: 50%;\n    max-width: 100%;\n    padding: .375em .625em;\n    color: #545454;\n    font-size: 1.125em; }\n  .swal2-popup .swal2-radio,\n  .swal2-popup .swal2-checkbox {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n    .swal2-popup .swal2-radio label,\n    .swal2-popup .swal2-checkbox label {\n      margin: 0 .6em;\n      font-size: 1.125em; }\n    .swal2-popup .swal2-radio input,\n    .swal2-popup .swal2-checkbox input {\n      margin: 0 .4em; }\n  .swal2-popup .swal2-validationerror {\n    display: none;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    padding: 0.625em;\n    background: #f0f0f0;\n    color: #666666;\n    font-size: 1em;\n    font-weight: 300;\n    overflow: hidden; }\n    .swal2-popup .swal2-validationerror::before {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      margin: 0 .625em;\n      border-radius: 50%;\n      background-color: #f27474;\n      color: #fff;\n      font-weight: 600;\n      line-height: 1.5em;\n      text-align: center;\n      content: '!';\n      zoom: normal; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 80px;\n  height: 80px;\n  margin: 1.25em auto 1.875em;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  line-height: 80px;\n  cursor: default;\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  zoom: normal; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      -webkit-box-flex: 1;\n          -ms-flex-positive: 1;\n              flex-grow: 1; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      display: block;\n      position: absolute;\n      top: 37px;\n      width: 47px;\n      height: 5px;\n      border-radius: 2px;\n      background-color: #f27474; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        left: 17px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        right: 16px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n  .swal2-icon.swal2-warning, .swal2-icon.swal2-info, .swal2-icon.swal2-question {\n    margin: .333333em auto .5em;\n    font-family: inherit;\n    font-size: 3.75em; }\n  .swal2-icon.swal2-warning {\n    border-color: #facea8;\n    color: #f8bb86; }\n  .swal2-icon.swal2-info {\n    border-color: #9de0f6;\n    color: #3fc3ee; }\n  .swal2-icon.swal2-question {\n    border-color: #c9dae1;\n    color: #87adbd; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      -webkit-transform: rotate(45deg);\n              transform: rotate(45deg);\n      border-radius: 50%; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        top: -7px;\n        left: -33px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 60px 60px;\n                transform-origin: 60px 60px;\n        border-radius: 120px 0 0 120px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        top: -11px;\n        left: 30px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n        -webkit-transform-origin: 0 60px;\n                transform-origin: 0 60px;\n        border-radius: 0 120px 120px 0; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      position: absolute;\n      top: -4px;\n      left: -4px;\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.3);\n      border-radius: 50%;\n      z-index: 2;\n      -webkit-box-sizing: content-box;\n              box-sizing: content-box; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      position: absolute;\n      top: 8px;\n      left: 26px;\n      width: 7px;\n      height: 90px;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg);\n      z-index: 1; }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      display: block;\n      position: absolute;\n      height: 5px;\n      border-radius: 2px;\n      background-color: #a5dc86;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        top: 46px;\n        left: 14px;\n        width: 25px;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        top: 38px;\n        right: 8px;\n        width: 47px;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 0 0 1.25em;\n  padding: 0;\n  font-weight: 600; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    width: 2em;\n    height: 2em;\n    border-radius: 2em;\n    background: #3085d6;\n    color: #fff;\n    line-height: 2em;\n    text-align: center;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    width: 2.5em;\n    height: .4em;\n    margin: 0 -1px;\n    background: #3085d6;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n.swal2-show {\n  -webkit-animation: swal2-show 0.3s;\n          animation: swal2-show 0.3s; }\n  .swal2-show.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n.swal2-hide {\n  -webkit-animation: swal2-hide 0.15s forwards;\n          animation: swal2-hide 0.15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    -webkit-animation: none;\n            animation: none; }\n\n[dir='rtl'] .swal2-close {\n  right: auto;\n  left: 0; }\n\n.swal2-animate-success-icon .swal2-success-line-tip {\n  -webkit-animation: swal2-animate-success-line-tip 0.75s;\n          animation: swal2-animate-success-line-tip 0.75s; }\n\n.swal2-animate-success-icon .swal2-success-line-long {\n  -webkit-animation: swal2-animate-success-line-long 0.75s;\n          animation: swal2-animate-success-line-long 0.75s; }\n\n.swal2-animate-success-icon .swal2-success-circular-line-right {\n  -webkit-animation: swal2-rotate-success-circular-line 4.25s ease-in;\n          animation: swal2-rotate-success-circular-line 4.25s ease-in; }\n\n.swal2-animate-error-icon {\n  -webkit-animation: swal2-animate-error-icon 0.5s;\n          animation: swal2-animate-error-icon 0.5s; }\n  .swal2-animate-error-icon .swal2-x-mark {\n    -webkit-animation: swal2-animate-error-x-mark 0.5s;\n            animation: swal2-animate-error-x-mark 0.5s; }\n\n@-webkit-keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes swal2-rotate-loading {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n"
    ),
    v
  );
}),
  "undefined" != typeof window &&
    window.Sweetalert2 &&
    (window.sweetAlert = window.swal = window.Sweetalert2);
