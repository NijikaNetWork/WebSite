<template>
  <div class="mdui-col-xs-12">
    <div class="mdui-typo">
      <h1>
        # About
        <small class="typewrite" data-period="2000" data-type='[ "伊地知网络...", "NijikaNetWork..." ]'>
          <span class="wrap">NijikaNetWork...</span>
        </small>
      </h1>
    </div>
    <div class="mdui-card mdui-col-xl-6 mdui-col-lg-6 mdui-col-md-6 mdui-col-sm-12 mdui-m-y-2">
      <div class="mdui-card-primary-title">技能&创造力</div>
      <div class="mdui-card-content">
        <div
            v-for="skill in skills"
            :key="skill.title"
            class="mdui-chip"
            :class="skill.color"
            :mdui-tooltip="skill.tooltip"
        >
          <span class="mdui-chip-title">{{ skill.title }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="mdui-col-xs-12">
    <div class="mdui-typo">
      <h2>## Projects <small>最有意义的开源项目</small></h2>
    </div>
    <div class="mdui-row-xs-1 mdui-row-sm-2 mdui-row-md-3 mdui-row-lg-4 mdui-row-xl-4 mdui-m-y-2">
      <div class="mdui-col" v-for="project in projects" :key="project.Name">
        <div class="mdui-card mdui-m-y-1 mdui-hoverable">
          <a :href="project.Url" target="_blank" rel="external nofollow">
            <div class="mdui-card-header">
              <img class="mdui-card-header-avatar" :src="project.Icon">
              <div class="mdui-card-header-title">{{ project.Name }}</div>
              <div class="mdui-card-header-subtitle">{{ project.Desc }}</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const projects = ref([
  {
    Name: 'TTDF框架',
    Url: 'https://github.com/ShuShuicu/Typecho-Theme-Development-Framework',
    Desc: 'Typecho主题模板开发框架；面向小白，免费、简单、开源，提供了一些常用的功能以及调用函数，支持REST API。',
    Icon: '/images/typecho.svg'
  },
  {
    Name: 'qloginAPI',
    Url: 'https://github.com/ShuShuicu/qloginAPI',
    Desc: 'QQ登录中转API，无用户中心仅自己使用二开自彩虹。',
    Icon: '/images/QQ.svg'
  },
  {
    Name: '轻音小窝',
    Url: 'https://github.com/ShuShuicu/KON-WebSite-V2',
    Desc: '轻音部の小窝Vue重构版',
    Icon: '/images/Kon.jpg'
  },
  {
    Name: '轻音Java',
    Url: 'https://github.com/ShuShuicu/KON-Wallpaper-Java',
    Desc: '基于QStory的轻音壁纸QQJava脚本',
    Icon: '/images/KonJava.jpg'
  }
]);

const skills = ref([
  {
    title: 'PHP',
    color: 'mdui-color-deep-purple-200',
    tooltip: '世界上最好的编程语言'
  },
  {
    title: 'HTML5',
    color: 'mdui-color-pink-900',
    tooltip: '入门必学'
  },
  {
    title: 'Vue3',
    color: 'mdui-color-green-a700',
    tooltip: '努力学习；伟大，无需多言！'
  },
  {
    title: 'Vue.js',
    color: 'mdui-color-light-green-a700',
    tooltip: '伟大，无需多言！'
  },
  {
    title: 'CSS3',
    color: 'mdui-color-purple',
    tooltip: '能让你的网页变的非常好看'
  },
  {
    title: 'MDUI',
    color: 'mdui-color-indigo',
    tooltip: '最喜欢的前端框架'
  },
  {
    title: 'JavaScript',
    color: 'mdui-color-amber',
    tooltip: '俗称js，努力学习中！'
  },
  {
    title: 'Git',
    color: 'mdui-color-red',
    tooltip: 'git add . git push'
  }
]);

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

onMounted(() => {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
});
</script>

<style scoped>
.typewrite {
  background: linear-gradient(90deg, red, blue);-webkit-background-clip: text;color: transparent;
}
.mdui-chip {
  margin-right:10px;
}
</style>
