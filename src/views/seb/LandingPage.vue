<template>
  <div class="landingpage">
    <div class="planet">
      <div class="letters">
        <div class="letters__caracs">
          <p class="letters__caracs--1">C</p>
          <p class="letters__caracs--2">a</p>
          <p class="letters__caracs--3">r</p>
          <p class="letters__caracs--4">a</p>
          <p class="letters__caracs--5">c</p>
          <p class="letters__caracs--6">t</p>
          <p class="letters__caracs--7">é</p>
          <p class="letters__caracs--8">r</p>
          <p class="letters__caracs--9">i</p>
          <p class="letters__caracs--10">s</p>
          <p class="letters__caracs--11">t</p>
          <p class="letters__caracs--12">i</p>
          <p class="letters__caracs--13">q</p>
          <p class="letters__caracs--14">u</p>
          <p class="letters__caracs--15">e</p>
          <p class="letters__caracs--16">s</p>
        </div>

        <div class="letters__discovers">
          <p class="letters__discovers--1">d</p>
          <p class="letters__discovers--2">é</p>
          <p class="letters__discovers--3">c</p>
          <p class="letters__discovers--4">o</p>
          <p class="letters__discovers--5">u</p>
          <p class="letters__discovers--6">v</p>
          <p class="letters__discovers--7">e</p>
          <p class="letters__discovers--8">r</p>
          <p class="letters__discovers--9">t</p>
          <p class="letters__discovers--10">e</p>
          <p class="letters__discovers--11">s</p>
        </div>

        <div class="letters__pionniers">
          <p class="letters__pionniers--1">A</p>
          <p class="letters__pionniers--2">r</p>
          <p class="letters__pionniers--3">r</p>
          <p class="letters__pionniers--4">i</p>
          <p class="letters__pionniers--5">v</p>
          <p class="letters__pionniers--6">é</p>
          <p class="letters__pionniers--7">e</p>
        </div>

        <div class="letters__first"></div>

        <div class="letters__coloni"></div>

        <div class="letters__futur"></div>
      </div>
      <img :src="img" class="planet__mars" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  data() {
    return {
      img: require("../../assets/seb/mars.png")
    };
  }
  /*
  mounted() {
    function circularText(txt, radius, classIndex) {
      (txt = txt.split("")),
        (classIndex = document.getElementsByClassName("circTxt")[classIndex]);

      var deg = 360 / txt.length,
        origin = 0;

      txt.forEach(ea => {
        ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
        classIndex.innerHTML += ea;
        origin += deg;
      });
    }

    circularText(
      "Caractéristiques  Nos découvertes récentes  L'arrivée des pionniers  Les premiers marsiens  La colonisation  Nos futurs villes dômes  ",
      100,
      0
    );
  }*/
};
</script>

<style lang="scss">
.letters {
  position: absolute;
  // background: red;
  height: 1200px;
  width: 1200px;
  transform: translateY(500px);
  // opacity: 0.4;
  border-radius: 100%;
  font-size: 22px;
}
.letters__caracs {
  position: absolute;
  top: 260px;
  left: -100px;
  height: 150px;
  width: 460px;
  // background: yellow;
  transform: rotate(-70deg);
  color: white;
  position: relative;

  &--1 {
    position: absolute;
    top: 50px;
    left: 124px;
    transform: rotate(-10deg);
    cursor: pointer;
  }

  &--2 {
    position: absolute;
    top: 48px;
    left: 140px;
    cursor: pointer;
  }

  &--3 {
    position: absolute;
    top: 48px;
    left: 152px;
    cursor: pointer;
  }

  &--4 {
    position: absolute;
    top: 48px;
    left: 162px;
    transform: rotate(5deg);
    cursor: pointer;
  }

  &--5 {
    position: absolute;
    top: 48px;
    left: 175px;
    cursor: pointer;
  }

  &--6 {
    position: absolute;
    top: 48px;
    left: 186px;
    cursor: pointer;
  }

  &--7 {
    position: absolute;
    top: 48px;
    left: 194px;
    cursor: pointer;
  }

  &--8 {
    position: absolute;
    top: 48px;
    left: 206px;
    transform: rotate(5deg);
    cursor: pointer;
  }

  &--9 {
    position: absolute;
    top: 48px;
    left: 216px;
    transform: rotate(6deg);
    cursor: pointer;
  }

  &--10 {
    position: absolute;
    top: 49px;
    left: 224px;
    transform: rotate(10deg);
    cursor: pointer;
  }

  &--11 {
    position: absolute;
    top: 51px;
    left: 234px;
    transform: rotate(11deg);
    cursor: pointer;
  }

  &--12 {
    position: absolute;
    top: 52px;
    left: 244px;
    transform: rotate(11deg);
    cursor: pointer;
  }

  &--13 {
    position: absolute;
    top: 53px;
    left: 253px;
    transform: rotate(11deg);
    cursor: pointer;
  }

  &--14 {
    position: absolute;
    top: 55px;
    left: 265px;
    transform: rotate(11deg);
    cursor: pointer;
  }

  &--15 {
    position: absolute;
    top: 56px;
    left: 277px;
    transform: rotate(11deg);
    cursor: pointer;
  }

  &--16 {
    position: absolute;
    top: 58px;
    left: 287px;
    transform: rotate(11deg);
    cursor: pointer;
  }
}

.letters__discovers {
  position: absolute;
  top: -280px;
  left: 90px;
  height: 150px;
  width: 1000px;
  transform: rotate(-30deg);
  color: white;
  position: relative;

  &--1 {
    position: absolute;
    top: 104px;
    left: 10px;
    transform: rotate(-16deg);
    cursor: pointer;
  }

  &--2 {
    position: absolute;
    top: 99px;
    left: 24px;
    transform: rotate(-16deg);
    cursor: pointer;
  }

  &--3 {
    position: absolute;
    top: 94px;
    left: 36px;
    transform: rotate(-8deg);
    cursor: pointer;
  }

  &--4 {
    position: absolute;
    top: 92px;
    left: 46px;
    transform: rotate(-8deg);
    cursor: pointer;
  }

  &--5 {
    position: absolute;
    top: 89px;
    left: 59px;
    transform: rotate(-13deg);
    cursor: pointer;
  }

  &--6 {
    position: absolute;
    top: 85px;
    left: 72px;
    transform: rotate(-13deg);
    cursor: pointer;
  }

  &--7 {
    position: absolute;
    top: 83px;
    left: 84px;
    transform: rotate(-13deg);
    cursor: pointer;
  }

  &--8 {
    position: absolute;
    top: 80px;
    left: 94px;
    transform: rotate(-13deg);
    cursor: pointer;
  }

  &--9 {
    position: absolute;
    top: 78px;
    left: 104px;
    transform: rotate(-13deg);
    cursor: pointer;
  }

  &--10 {
    position: absolute;
    top: 76px;
    left: 112px;
    transform: rotate(-13deg);
    cursor: pointer;
  }

  &--11 {
    position: absolute;
    top: 74px;
    left: 122px;
    transform: rotate(-13deg);
    cursor: pointer;
  }
}

.letters__pionniers {
  position: absolute;
  top: -400px;
  left: 290px;
  height: 150px;
  width: 1000px;
  transform: rotate(-20deg);
  color: white;
  position: relative;
  opacity: 0.3;
  background: yellow;

  &--1 {
    position: absolute;
    top: 30px;
    color: green;
    transform: rotate(-20deg);
  }

  &--2 {
    position: absolute;
    top: 27px;
    left: 16px;
    color: red;
    transform: rotate(-19deg);
  }

  &--3 {
    position: absolute;
    top: 24px;
    left: 24px;
    color: red;
    transform: rotate(-13deg);
  }

  &--4 {
    position: absolute;
    top: 22px;
    left: 34px;
    color: red;
    transform: rotate(-10deg);
  }

  &--5 {
    position: absolute;
    top: 21px;
    left: 42px;
    color: red;
    transform: rotate(-5deg);
  }

  &--6 {
    position: absolute;
    top: 21px;
    left: 55px;
    color: red;
    transform: rotate(-5deg);
  }

  &--7 {
    position: absolute;
    top: 21px;
    left: 66px;
    color: red;
    transform: rotate(-5deg);
  }
}

.landingpage {
  height: 100vh;
  width: 100vw;
  background: black;
  overflow: hidden;
}
.planet {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transform: translateY(250px);
}

//.container {
//  /*centers in the container*/
//  text-align: center;
//}
//
//.circTxt {
/*allows for centering*/
//  display: inline-block;
/*adjust as needed*/
//  color: black;
//}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>