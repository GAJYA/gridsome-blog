<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>#{{$page.tag.tagName}}</h1>
              <!-- <span class="subheading">A Blog Theme by Start Bootstrap</span> -->
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
          <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
            <g-link :to="'/post/'+ post.id">
              <h2 class="post-title">
                {{ post.title }}
              </h2>
              
            </g-link>
            <!-- <p class="post-meta">
              Posted by
              <a href="#!">{{ post.author.name }}</a>
              on {{ post.created_at}}
            </p> -->
            <!-- Divider-->
            <hr class="my-4" />

          </div>
    
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!){
  tag: strapiTag(id:$id ) {
    id
    tagName
    posts{
     id
     title
    }
    created_at
  }
}
</page-query>

<script>
export default {
    name: 'TagPage'
}
</script>

<style>

</style>