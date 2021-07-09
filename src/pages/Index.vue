<template>
  <Layout>
    <!-- Page Header-->
    <header 
        class="masthead" 
        :style="{backgroundImage: `url(${general.cover.url})`}"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>{{ general.title }}</h1>
              <span class="subheading">{{ general.subtitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview" v-for="post in $page.posts.edges" :key="post.node.id">
            <g-link :to="'/post/'+ post.node.id">
              <h2 class="post-title">
                {{ post.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ post.node.author.name }}</a>
              on {{ post.node.created_at}}
            </p>
            <span v-for="tag in post.node.tags" :key="tag.id">
                <g-link :to="`/tag/${tag.id}`">{{ tag.tagName }}</g-link>
                &nbsp;&nbsp;
            </span>
            <!-- Divider-->
            <hr class="my-4" />

          </div>
          
          <!-- Pager-->
          <Pager :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int){
  posts: allStrapiPosts(perPage:2, page:$page) @paginate {
     pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        content
        tags{
          id
          tagName
        }
        author{
          name
          picture{
            url
          }
        }
        created_at
      }
    }
  }
  general:allStrapiGeneral {
    edges{
      node {
        title
        subtitle
        cover{
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  components: {
    Pager
  },
  metaInfo: {
    title: "Hello, world!",
  },
  computed: {
      general() {
          return this.$page.general.edges[0].node
      }
  },
};
</script>

<style></style>
