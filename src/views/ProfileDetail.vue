<template>
  <!-- reponsive   :xs<768px   :sm≥768px    :md≥992px   :lg≥1200px   :xl≥1920px   -->
  <div class="home">
    <AddminLayout>
      <div class="_flex ">
        <div>
          <el-container>
            <el-aside class="_flex _align-center _justify-center">
              <div
                class="grid-content bg-purple"
                style="height: 200px; width: 200px"
              />
            </el-aside>
            <el-main style="width: 65vw;">
              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <label class="_font-14">First name</label>
                </el-col>
                <el-col :xl="4">
                  <el-input
                    placeholder="input your first name"
                    v-model="firstName"
                    clearable
                  >
                  </el-input>
                </el-col>
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <div class="_font-14">Last name</div>
                </el-col>
                <el-col :xl="4">
                  <el-input
                    placeholder="input your last name"
                    v-model="lastName"
                    clearable
                  >
                  </el-input>
                </el-col>
              </el-row>

              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <div class="_font-14">Gender</div>
                </el-col>
                <el-col :xl="2">
                  <el-select
                    v-model="selectedGender"
                    clearable
                    placeholder="Select"
                  >
                    <el-option
                      v-for="item in genderOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :xl="1" class="_flex _align-center _justify-center">
                  <div class="_font-14">Age</div>
                </el-col>
                <el-col :xl="1">
                  <el-input-number
                    style="width: 49px;"
                    v-model="age"
                    :controls="false"
                    :min="1"
                    :placeholder="'Enter your age'"
                  />
                </el-col>
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <div class="_font-14">Date of birth</div>
                </el-col>
                <el-col :xl="4" class="_flex _align-center _justify-center">
                  <el-date-picker
                    v-model="dateOfBirth"
                    type="date"
                    format="d/M/yyyy"
                    placeholder="Pick a day"
                  >
                  </el-date-picker>
                </el-col>
              </el-row>

              <el-row :gutter="4" class="row-bg" type="flex">
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <div class="_font-14">Hobbies</div>
                </el-col>
                <el-col :xl="5">
                  <el-select
                    v-model="selectedHobbies"
                    multiple
                    filterable
                    collapse-tags
                    placeholder="Select"
                    style="width: 252px"
                  >
                    <el-option
                      v-for="item in hobbiesOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-col>
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <div class="_font-14">Ever married</div>
                </el-col>
                <el-col :xl="3" class="_flex _align-center _justify-center">
                  <el-radio v-model="everMarried" :label="true">Yes</el-radio>
                  <el-radio v-model="everMarried" :label="false">No</el-radio>
                </el-col>
              </el-row>
              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="2" class="_flex _align-center _justify-center">
                  <div class="_font-14">Social Account</div>
                </el-col>
                <el-col :xl="10">
                  <el-input
                    placeholder="input your social account link"
                    v-model="socialAccount"
                    clearable
                  >
                  </el-input>
                </el-col>
              </el-row>

              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="2" class="_flex _justify-center">
                  <div class="introduct _font-14">Introduction</div>
                </el-col>
                <el-col :xl="10">
                  <el-input
                    type="textarea"
                    :rows="5"
                    maxlength="500"
                    show-word-limit
                    placeholder="Write something about yourself"
                    v-model="introduct"
                  >
                  </el-input>
                </el-col>
              </el-row>
              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="8" class="_flex _justify-center" />
                <el-col :xl="2" class="_flex _justify-center"
                  ><el-button type="danger">Delete</el-button></el-col
                >
                <el-col :xl="2" class="_flex _justify-center"
                  ><el-button type="primary" @click="submitHandle"
                    >Save</el-button
                  ></el-col
                >
              </el-row>
            </el-main>
          </el-container>
        </div>
      </div>
    </AddminLayout>
  </div>
</template>

<style scoped>
.bg-purple {
  background: #d3dce6;
}
.row-bg {
  padding: 10px 0;
}
.introduct {
  margin-top: 5px;
}
.title {
  margin-left: 20px;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddminLayout from "../layouts/AdminLayout.vue";
import { Gender } from "../models/person/Person";
import { Person } from "../models/person/Person";
import { allHobbies, allProfile } from "../fakedata";
@Component({
  components: {
    AddminLayout,
  },
})
export default class Dashboard extends Vue {
  private genderOptions = [
    {
      value: Gender.MALE,
      label: "Male",
    },
    {
      value: Gender.FEMALE,
      label: "Female",
    },
    {
      value: Gender.OTHER,
      label: "Other",
    },
  ];

  private hobbiesOptions = allHobbies.map((hob) => ({
    value: hob.id,
    label: hob.name,
  }));

  private firstName = "";
  private lastName = "";
  private selectedGender = 0;
  private age = 1;
  private dateOfBirth = "";
  private everMarried = false;
  private selectedHobbies = [];
  private socialAccount = "";
  private introduct = "";

  private submitHandle() {
    const newPerson = new Person({
      firstName: this.firstName,
      lastName: this.lastName,
      gender: this.selectedGender,
      age: this.age,
      dateOfBirth: this.dateOfBirth,
      everMarried: this.everMarried,
      hobbies: this.selectedHobbies,
      socialAccount: this.socialAccount,
      introduce: this.introduct,
    });
    allProfile.push(newPerson);
  }
}
</script>
