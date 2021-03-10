<template>
  <div>
    <AddminLayout>
      <el-table :data="tableData">
        <el-table-column prop="index" label="ID" width="50" />
        <el-table-column prop="avatar" label="Avatar" width="90">
          <template slot-scope="scope">
            <img style="height: 50px; width: 50px; border-radius: 50%;" v-if="(scope.row.avatar).length > 0" :src="scope.row.avatar" />
            <img style="height: 50px; width: 50px; border-radius: 50%;" v-else src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" />
          </template>
        </el-table-column>
        <el-table-column prop="fullName" label="FullName" width="180" />
        <el-table-column prop="genderAge" label="Gender/Age" width="120">
          <template slot-scope="scope">
            <i :class="scope.row.gender" /> / {{ scope.row.age }}
          </template>
        </el-table-column>
        <el-table-column prop="everMarried" label="Ever married" width="200" />
        <el-table-column prop="introduce" label="Introduce">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              :title="$t('introduct_of_1') + scope.row.fullName"
              width="285"
              trigger="hover"
              :content="scope.row.introduce"
            >
              <el-button slot="reference">{{$t('introduct_of_2')}}</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="hobbies" label="Hobbies" width="370">
          <template slot-scope="scope">
            {{ scope.row.hobbies }}
          </template>
        </el-table-column>
        <el-table-column
          prop="socialAccount"
          label="Social account"
        />
        <el-table-column width="100"
          ><el-button type="primary" plain>Detail</el-button></el-table-column
        >
      </el-table>
    </AddminLayout>
  </div>
</template>

<style scoped>
  .intro-custom {
    width: calc(100% - 20px);
    border: none !important;
  }
  /* .intro-custom:hover {
    background-color: #ececec00 !important;
    color: black !important;
  } */
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AddminLayout from "../layouts/AdminLayout.vue";
import {allProfile} from "../fakedata";
import { Gender } from "../models/person/Person";

class PersonInfoModel {
  index!: number;
  avatar!: string;
  fullName!: string;
  gender!: string;
  age!: number;
  everMarried!: string;
  introduce!: string;
  hobbies!: string;
  socialAccount!: string;
  constructor(init?: Partial<PersonInfoModel>) {
    Object.assign(this, init);
  }
}

@Component({
  components: {
    AddminLayout,
  },
})
export default class AllProfile extends Vue {
  private tableData = allProfile.map((item, index) => {
    return new PersonInfoModel({
      index: index + 1,
      avatar: item.avatar,
      fullName: item.lastName + " " + item.firstName,
      gender: item.gender ? this.getGenderClassName(item.gender) : this.getGenderClassName(Gender.MALE),
      age: item.age,
      everMarried: item.everMarried ? "YES" : "NO",
      introduce: item.introduce,
      hobbies: item.hobbies ? item.hobbies.map(hob => hob.name).join(", ") : "",
      socialAccount: item.socialAccount
    })
  });

  private getGenderClassName(gender: Gender): string {
    switch(gender) {
      case Gender.MALE: return "el-icon-male";
      case Gender.FEMALE: return "el-icon-female";
      default: return "el-icon-male";
    }
  }
}
</script>
