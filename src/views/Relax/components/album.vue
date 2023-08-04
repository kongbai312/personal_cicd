<template>
  <div class="album_container">
    <pr_headerImg :img="url" :titleArr="['相','册']"></pr_headerImg>
    <div class="album_content">
      <el-card shadow="hover" class="album_elCard">
        <div class="albumItem" @click="goto(item.id,item.title)" v-for="item in AlbumList" :key="item.id">
          <img class="albumItem_img" :src="item.image" alt="">
          <div class="albumItem_content">
            <span class="text">{{ item.title }}</span>
            <span class="textHover">{{ item.text}}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router';
import AlbumList from '@/assets/json/albumList.json';
  let url = 'https://pic.imgdb.cn/item/64c4b14a1ddac507cc1f832d.jpg'

  //引入router
  const router= useRouter()

  //访问对应图集
  const goto = ( id : number , title : string) => {
    router.push(`/album/${id}?title=${title}`)
  }
</script>

<style lang="scss" scoped>
  .album_container{
    .album_content{
      padding: 10px 10px;
      .album_elCard{
        box-sizing: border-box;
        padding: 40px 50px;
        border-radius: 20px;
        ::v-deep(){
          .el-card__body{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
        }
        .albumItem{
          position: relative;
          margin-bottom: 30px;
          width: 600px;
          height: 400px;
          background: #000;
          border-radius: 30px;
          cursor: url(../../../assets/link.cur),pointer;
          &:hover{
            .albumItem_content{
              .text{
                &::after{
                  transform: translate(0);
                }
              }
              .textHover{
                opacity: 1;
                transform: translate(0);
              }
            }
          }
          .albumItem_img{
            position: relative;
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 30px;
            opacity: 0.8;
          }
          .albumItem_content{
            box-sizing: border-box;
            position: absolute;
            height: 100%;
            width: 100%;
            padding: 80px 50px;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            .text{
              position: relative;
              color: #fff;
              font-weight: 700;
              font-size: 40px;
              padding: 40px 0;
              overflow: hidden;
              &::after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #fff;
                transition: transform 0.35s;
                transform: translate(-100%);
              }
            }
            .textHover{
              color: #fff;
              margin-top: 30px;
              transition: opacity .35s,transform .35s;
              transform: translate(100%);
              opacity: 0;
            }
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .album_container{
      .album_content{
        .album_elCard{
          border-radius: 15px;
          padding: 20px 15px;
          .albumItem{
            margin-bottom: 20px;
            border-radius: 15px;
            width: 100%;
            height: 200px;
            .albumItem_img{
              border-radius: 15px;
            }
            .albumItem_content{
              padding: 10px 30px;
              .text{
                font-size: 20px;
                padding: 20px 0;
                &::after{
                  height: 2px;
                }
              }
              .textHover{
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
</style>
