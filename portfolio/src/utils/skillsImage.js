import angular from '../assets/svg/skills/angular.svg'
import aws from '../assets/svg/skills/aws.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import css from '../assets/svg/skills/css.svg'
import dart from '../assets/svg/skills/dart.svg'
import django from '../assets/svg/skills/django.svg'
import docker from '../assets/svg/skills/docker.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import html from '../assets/svg/skills/html.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nuxtJS from '../assets/svg/skills/nuxtJS.svg'
import react from '../assets/svg/skills/react.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'

import figma from '../assets/svg/skills/figma.svg'
import markdown from '../assets/svg/skills/markdown.svg'

import redux from '../assets/svg/skills/redux.svg'
import nodejs from '../assets/svg/skills/nodeJS.svg'
import expressjs from '../assets/svg/skills/expressJS.svg'
import github from '../assets/svg/skills/github.svg'
import npm from '../assets/svg/skills/npm.svg'
import chakraui from '../assets/svg/skills/chakraUI.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'docker':
            return docker;
        case 'css':
            return css;
        case 'angular':
            return angular;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'nuxt js':
            return nuxtJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'dart':
            return dart;
        case 'java':
            return java;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'graphql':
            return graphql;
        case 'materialui':
            return materialui;
        case 'wordpress':
            return wordpress;
        case 'figma':
            return figma;
        case 'markdown':
            return markdown;
        case 'redux':
            return redux;
        case 'nodejs':
            return nodejs;
        case 'expressjs':
            return expressjs;
        case 'github':
            return github;
        case 'npm':
            return npm;
        case 'chakraui':
            return chakraui;
        default:
            break;
    }
}
