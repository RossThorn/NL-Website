window.onload = function() {
	particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 110.48066982851817,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 133.99274002972194,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
		retina_detect: !0
	})
}, $(document).ready(function() {
	window.setTimeout(function() {
			$("body").addClass("loaded")
		}, 1200), $("#fullpage").fullpage({
			navigation: !0,
			navigationPosition: "right",
			responsiveHeight: 540,
			anchors: ["welcome", "services", "industries", "outofthebox", "cases", "contactus", "wowPage"],
			afterRender: function() {
				$("#fullpage").fullpage.reBuild()
			},
			onLeave: function(a, b, c) {
				var d = ($(this), $("#header"));
				1 == a && "down" == c ? d.addClass("fixedActive") : 2 == a && "up" == c && d.removeClass("fixedActive")
			}
		}), $(function() {
			function a() {
				var a, f;
				a = document.createElement("div"), WebGlMain.appendChild(a), h = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e4), h.position.z = 100, i = new THREE.Scene, j = new THREE.CanvasRenderer( {alpha: true} ), j.setPixelRatio(window.devicePixelRatio), j.setSize(window.innerWidth, window.innerHeight), a.appendChild(j.domElement);
				for (var g = 2 * Math.PI, k = new THREE.SpriteCanvasMaterial({
						color: 16777215,
						program: function(a) {
							a.beginPath(), a.arc(0, 0, .5, 0, g, !0), a.fill()
						}
					}), l = new THREE.Geometry, m = 0; m < 100; m++) f = new THREE.Sprite(k), f.position.x = 2 * Math.random() - 1, f.position.y = 2 * Math.random() - 1, f.position.z = 2 * Math.random() - 1, f.position.normalize(), f.position.multiplyScalar(10 * Math.random() + 450), f.scale.x = f.scale.y = 10, i.add(f), l.vertices.push(f.position);
				var n = new THREE.Line(l, new THREE.LineBasicMaterial({
					color: 16777215,
					opacity: .5
				}));
				i.add(n), document.addEventListener("mousemove", c, !1), document.addEventListener("touchstart", d, !1), document.addEventListener("touchmove", e, !1), window.addEventListener("resize", b, !1)
			}

			function b() {
				m = window.innerWidth / 2, n = window.innerHeight / 2, h.aspect = window.innerWidth / window.innerHeight, h.updateProjectionMatrix(), j.setSize(window.innerWidth, window.innerHeight)
			}

			function c(a) {
				k = a.clientX - m, l = a.clientY - n
			}

			function d(a) {
				a.touches.length > 1 && (a.preventDefault(), k = a.touches[0].pageX - m, l = a.touches[0].pageY - n)
			}

			function e(a) {
				1 == a.touches.length && (a.preventDefault(), k = a.touches[0].pageX - m, l = a.touches[0].pageY - n)
			}

			function f() {
				requestAnimationFrame(f), g()
			}

			function g() {
				h.position.x += .05 * (k - h.position.x), h.position.y += .05 * (-l + 200 - h.position.y), h.lookAt(i.position), j.render(i, h)
			}
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) $("#name").focus(function() {
				$.fn.fullpage.setAutoScrolling(!1), $.fn.fullpage.moveTo("contactus")
			}), $("#email").focus(function() {
				$.fn.fullpage.setAutoScrolling(!1), $.fn.fullpage.moveTo("contactus")
			}), $("#description").focus(function() {
				$.fn.fullpage.setAutoScrolling(!1), $.fn.fullpage.moveTo("contactus")
			});
			else {
				var h, i, j, k = 0,
					l = 0,
					m = window.innerWidth / 2,
					n = window.innerHeight / 2;
				a(), f()
			}
		}), $(".wow-btn").click(function() {
			$("#hidden-section").addClass("active"), $("body").addClass("wow-active"), window.setTimeout(function() {
				$("#moveWow").addClass("visible")
			}, 1200), $("#hidden-section").bind("mousewheel", function() {
				return !1
			}), $("#hidden-section").bind("touchmove", function() {
				return !1
			})
		}), $("#moveWow").click(function() {
			$("#hidden-section").removeClass("active"), $("body").removeClass("wow-active"), $(this).removeClass("visible")
		}), $(function() {
			$(".cases").click(function(a) {
				$(this).addClass("bg-active"), $(this).find(".case-bg").addClass("active"), a.stopPropagation()
			}), $(".cases a").click(function(a) {
				$(this).parent().parent().addClass("bg-active"), $(this).parent().parent().find(".case-bg").addClass("active"), a.stopPropagation()
			}), $(document).on("click", function(a) {
				$(a.target).is(".cases") === !1 && ($(".case-bg").removeClass("active"), $(".cases").removeClass("bg-active"))
			}), $(".popup-close").click(function(a) {
				$(this).parent().removeClass("active"), $(".cases").removeClass("bg-active"), a.stopPropagation()
			})
		}), $(function() {
			$("#wowToForm").click(function(a) {
				$("#hidden-section").removeClass("active"), $("#requestForm").find("#name").focus(), a.stopPropagation(), $("#moveWow").removeClass("visible"), $("body").removeClass("wow-active")
			})
		}), $(document).on("click", ".moveDown", function() {
			$.fn.fullpage.moveSectionDown()
		}), $(document).on("click", "body.wow-active #header .logo", function() {
			$("body").removeClass("wow-active"), $("#hidden-section").removeClass("active"), e.stopPropagation()
		}),
		function() {
			function a(a) {
				classie.add(a.target.parentNode, "input--filled")
			}

			function b(a) {
				"" === a.target.value.trim() && classie.remove(a.target.parentNode, "input--filled")
			}
			String.prototype.trim || ! function() {
				var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(a, "")
				}
			}(), [].slice.call(document.querySelectorAll(".input__field")).forEach(function(c) {
				"" !== c.value.trim() && classie.add(c.parentNode, "input--filled"), c.addEventListener("focus", a), c.addEventListener("blur", b)
			})
		}(), $(".submit-success .alert-close").click(function() {
			$(this).parent().fadeToggle(), $("#requestForm button").show(), $("#requestForm").parent().removeClass("opacity")
		}), $("#requestForm").validate({
			ignore: ":hidden",
			rules: {
				name: {
					required: !0,
					minlength: 3
				},
				email: {
					required: !0,
					minlength: 3
				}
			},
			submitHandler: function(a) {
				return $.ajax({
					url: "//formspree.io/clay@strlght.com",
					method: "POST",
					data: $("#requestForm").serialize(),
					dataType: "json",
					success: function() {
						$("#requestForm").parent().addClass("opacity"), $(".submit-success").fadeToggle(200), $("#requestForm button").hide(), setTimeout(function() {
							$(".submit-success").fadeOut(200), $("#requestForm button").show(), $("#requestForm").parent().removeClass("opacity")
						}, 3e3)
					}
				}), !1
			},
			invalidHandler: function(a, b) {
				var c = b.numberOfInvalids();
				c && $("#requestForm input.error").parent().find("label").addClass("with-error")
			}
		})
});
