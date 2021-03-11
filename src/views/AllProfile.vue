<template>
  <div>
    <AddminLayout>
      <el-button style="float: left; margin-bottom: 15px;" @click="toCreatePage" type="primary">{{
        $t("all_profile.create_profile")
      }}</el-button>
      <el-table :data="tableData">
        <el-table-column
          prop="index"
          :label="$t('all_profile.index')"
          width="50"
        />
        <el-table-column
          prop="avatar"
          :label="$t('all_profile.avatar')"
          width="90"
        >
          <template slot-scope="scope">
            <img
              style="height: 50px; width: 50px; border-radius: 50%;"
              v-if="scope.row.avatar.length > 0"
              :src="scope.row.avatar"
            />
            <img
              style="height: 50px; width: 50px; border-radius: 50%;"
              v-else
              src="https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg"
            />
          </template>
        </el-table-column>
        <el-table-column
          prop="fullName"
          :label="$t('all_profile.fullname')"
          width="180"
        />
        <el-table-column
          prop="genderAge"
          :label="$t('all_profile.gender_age')"
          width="120"
        >
          <template slot-scope="scope">
            <i :class="scope.row.gender" /> / {{ scope.row.age }}
          </template>
        </el-table-column>
        <el-table-column
          prop="everMarried"
          :label="$t('all_profile.ever_married')"
          width="200"
        />
        <el-table-column prop="introduce" :label="$t('all_profile.introduce')">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              :title="$t('common.introduct_of_1') + scope.row.fullName"
              width="285"
              trigger="hover"
              :content="scope.row.introduce"
            >
              <el-button slot="reference">{{
                $t("common.introduct_of_2")
              }}</el-button>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="hobbies"
          :label="$t('all_profile.hobbies')"
          width="370"
        >
          <template slot-scope="scope">
            {{ scope.row.hobbies }}
          </template>
        </el-table-column>
        <el-table-column
          prop="socialAccount"
          :label="$t('all_profile.social_account')"
        />
        <el-table-column width="100">
          <template slot-scope="scope">
            <el-button
              v-on:click="toDetailPage(scope.row.id)"
              type="primary"
              plain
              >{{ $t("all_profile.detail") }}</el-button
            >
          </template>
        </el-table-column>
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
import { allProfile } from "../fakedata";
import { Gender } from "../models/person/Person";

class PersonInfoModel {
  id!: string;
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
  $router: any;
  $store: any;
  $t: any;
  private tableData = allProfile.map((item, index) => {
    return new PersonInfoModel({
      id: item.id,
      index: index + 1,
      avatar: item.avatar,
      fullName: item.lastName + " " + item.firstName,
      gender: item.gender
        ? this.getGenderClassName(item.gender)
        : this.getGenderClassName(Gender.MALE),
      age: item.age,
      everMarried: item.everMarried
        ? String(this.$t("all_profile.yes"))
        : String(this.$t("all_profile.no")),
      introduce: item.introduce,
      hobbies: item.hobbies
        ? item.hobbies.map((hob) => hob.name).join(", ")
        : "",
      socialAccount: item.socialAccount,
    });
  });

  private getGenderClassName(gender: Gender): string {
    switch (gender) {
      case Gender.MALE:
        return "el-icon-male";
      case Gender.FEMALE:
        return "el-icon-female";
      default:
        return "el-icon-male";
    }
  }

  private toCreatePage() {
    this.$router.push("/profile-detail/create");
  }

  toDetailPage(id: string) {
    this.setUpdateProfileStatus();
    this.$router.push(`/profile-detail/update/` + id);
  }

  private setUpdateProfileStatus() {
    this.$store.dispatch("setUpdateProfile", true);
  }
}
</script>
