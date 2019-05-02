import $ from "jquery";
import { TweenMax, TimelineMax, Expo, Power4 } from "gsap";

var animate = $(".animate");
var stand = $("#ground");
var shadow = $("#shadow");
var branch = $("#branch");
var smallCircle = $("#small-circle");
var largeCircle = $("#large-circle");
var trunk = $("#trunk");

TweenMax.set([stand, shadow, trunk, branch, smallCircle, largeCircle], {
  opacity: 0
});

animate.on("click", function() {
  var tl = new TimelineMax();
  tl.add(
    TweenMax.fromTo(
      stand,
      0.3,
      {
        attr: { d: "m -87.686541,326.76872 h 0" },
        opacity: 0
      },
      {
        attr: { d: "m -87.686541,326.76872 h 6.34142" },
        opacity: 1,
        ease: Expo.easeOut
      }
    ),
    "team"
  );
  tl.add(TweenMax.fromTo(shadow, 0.3, { opacity: 0 }, { opacity: 1 }), "team");
  tl.add(
    TweenMax.fromTo(
      trunk,
      0.3,
      {
        attr: {
          d:
            "m -85.239749,326.69568 -0.04298,0.11094 1.412414,-1.2e-4 0.0827,0 z"
        },
        opacity: 0
      },
      {
        attr: {
          d:
            "m -85.239749,326.69568 -0.04298,-12.11094 1.412414,-1.2e-4 0.0827,12.10068 z"
        },
        opacity: 1,
        ease: Power4.easeOut
      }
    ),
    "branch"
  );
  tl.add(
    TweenMax.fromTo(
      branch,
      0.3,
      {
        attr: {
          d: "m -89.031238,320.7285 c 0,0 -0.290314,0.65163 0.424406,2.93041"
        },
        opacity: 0
      },
      {
        attr: {
          d: "m -89.031238,320.7285 c 0,0 -0.290314,3.65163 3.424406,2.93041"
        },
        opacity: 1
      }
    ),
    "branch"
  );
  tl.add(
    TweenMax.fromTo(
      largeCircle,
      0.3,
      {
        attr: {
          rx: "0",
          ry: "0"
        },
        opacity: 0
      },
      {
        attr: {
          rx: "6.9551096",
          ry: "6.9551096"
        },
        opacity: 1,
        ease: Power4.easeOut
      }
    )
  );
  tl.add(
    TweenMax.fromTo(
      smallCircle,
      0.3,
      {
        attr: {
          rx: "0",
          ry: "0"
        },
        opacity: 0
      },
      {
        attr: {
          rx: "5.4016509",
          ry: "5.1919179"
        },
        opacity: 1,
        ease: Power4.easeOut
      }
    ),
    0.4
  );
});
