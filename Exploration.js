<script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>




<main id="app" class="grid">
  <h1><b>Superheroes</b> list</h1>
  <hr>
  <router-view></router-view>
</main>

<template id="heroes-list">
<section>
  <table>
    <thead>
    <tr>
      <th>Name</th>
      <th>Power</th>
      <th>Badass</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="hero in filteredHeroes">
      <td>
        <router-link v-bind:to="{name: 'hero', params: {hero_id: hero.id}}">{{ hero.name }}</router-link>
      </td>
      <td>{{ hero.power }}</td>
      <td>{{ hero.badass }}</td>
      <td>
        <router-link v-bind:to="{name: 'hero-edit', params: {hero_id: hero.id}}">
          Edit
        </router-link>
        <span> / </span>
        <router-link v-bind:to="{name: 'hero-delete', params: {hero_id: hero.id}}">
          Delete
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
  <router-link class="btn btn-main" v-bind:to="{path: '/hero-add'}">
    Add Superhero
  </router-link>
</section>
</template>

<template id="hero">
<section class="grid">
  <h2>{{ hero.name }}</h2>
  <p>
    <b>Power:</b> {{ hero.power }}
    <br>
    <b>Badass:</b> {{ hero.badass }}
  </p>
  <br>
  <router-link v-bind:to="'/'">Back</router-link>
</section>
</template>

<template id="hero-add">
<section>
  <h2>Add Superhero</h2>
  <form v-on:submit.prevent="createHero">
    <label>Name</label>
    <input id="add-name" v-model="hero.name" required/>
    <label>Superpower</label>
    <textarea id="add-power" rows="8" v-model="hero.power" required></textarea>
    <label>Badass</label>
    <input type="number" min="0" max="10" v-model="hero.badass" required/>
    <button type="submit" class="btn btn-main">Create</button>
    <router-link class="btn" v-bind:to="'/'">Cancel</router-link>
  </form>
</section>
</template>

<template id="hero-edit">
<section>
  <h2>Edit Hero</h2>
  <form v-on:submit.prevent="updateHero">
    <label>Name</label>
    <input v-model="hero.name" required/>
    <label>Superpower</label>
    <textarea rows="10" v-model="hero.power"></textarea>
    <label>Badass</label>
    <input type="number" v-model="hero.badass"/>
    <button type="submit" class="btn btn-main">Update</button>
    <router-link class="btn" v-bind:to="'/'">Cancel</router-link>
  </form>
</section>
</template>

<template id="hero-delete">
<section>
  <h2>Delete <b>{{ hero.name }}</b>?</h2>
  <form v-on:submit.prevent="deleteHero">
    <p>Are You sure? You want to delete 
      <b>{{ hero.name }}</b> from this Universe?
      He will be very upset...
    </p>
    <button type="submit" class="btn btn-main">Delete</button>
    <router-link class="btn" v-bind:to="'/'">Cancel</router-link>
  </form>
</section>
</template>


