<template>
  <!-- reponsive   :xs<768px   :sm≥768px    :md≥992px   :lg≥1200px   :xl≥1920px   -->
  <div class="home">
    <AddminLayout>
      <div
        class="_flex"
        style="height: 20px; font-size: 20px; font-weight: bold"
      >
        {{ fullName }}
      </div>
      <div class="_flex">
        <el-form
          ref="profileDetail"
          :rules="rules"
          :model="person"
          label-width="120px"
        >
          <el-container>
            <el-aside class="_flex _justify-center">
              <div class="avatar-wrapper">
                <img
                  :src="person.avatar"
                  style="height: 200px; width: 200px"
                  alt="avatar"
                />
                <el-upload
                  action="#"
                  :auto-upload="false"
                  :show-file-list="false"
                  :on-change="toggleUpload"
                  :on-remove="toggleUpload"
                >
                  <el-button size="small" type="primary"
                    >Click to upload</el-button
                  >
                </el-upload>
              </div>
            </el-aside>
            <el-main style="width: 65vw">
              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="6">
                  <el-form-item
                    :label="$t('profile_detail.first_name')"
                    prop="firstName"
                  >
                    <el-input
                      placeholder="input your first name"
                      v-model="person.firstName"
                      clearable
                    />
                  </el-form-item>
                </el-col>
                <el-col :xl="6">
                  <el-form-item
                    :label="$t('profile_detail.last_name')"
                    prop="lastName"
                  >
                    <el-input
                      placeholder="input your last name"
                      v-model="person.lastName"
                      clearable
                    />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="2">
                  <el-form-item
                    :label="$t('profile_detail.gender')"
                    prop="selectedGender"
                  >
                    <el-select
                      style="width: 80px"
                      v-model="person.selectedGender"
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
                  </el-form-item>
                </el-col>

                <el-col :xl="3" class="custom-age-col">
                  <el-form-item :label="$t('profile_detail.age')" prop="age">
                    <el-input-number
                      style="width: 49px"
                      v-model="person.age"
                      :controls="false"
                      :min="1"
                      :placeholder="'Enter your age'"
                    />
                  </el-form-item>
                </el-col>

                <el-col :xl="4">
                  <el-form-item
                    :label="$t('profile_detail.date_of_birth')"
                    prop="dateOfBirth"
                  >
                    <el-date-picker
                      v-model="person.dateOfBirth"
                      style="width: 180px"
                      type="date"
                      format="d/M/yyyy"
                      placeholder="Pick a day"
                    >
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="4" class="row-bg" type="flex">
                <el-col :xl="6">
                  <el-form-item
                    :label="$t('profile_detail.hobbies')"
                    prop="selectedHobbies"
                  >
                    <el-select
                      v-model="person.selectedHobbies"
                      multiple
                      filterable
                      collapse-tags
                      placeholder="Select"
                      style="width: 180px"
                    >
                      <el-option
                        v-for="item in hobbiesOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :xl="6" class="ever-married-custom">
                  <el-form-item
                    :label="$t('profile_detail.ever_married')"
                    prop="everMarried"
                  >
                    <el-radio
                      style="width: 50px"
                      v-model="person.everMarried"
                      :label="true"
                      >{{ $t("profile_detail.yes") }}</el-radio
                    >
                    <el-radio
                      style="width: 50px"
                      v-model="person.everMarried"
                      :label="false"
                      >{{ $t("profile_detail.no") }}</el-radio
                    >
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="12">
                  <el-form-item
                    :label="$t('profile_detail.social_account')"
                    prop="socialAccount"
                  >
                    <el-input
                      placeholder="input your social account link"
                      v-model="person.socialAccount"
                      clearable
                    />
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="12">
                  <el-form-item
                    :label="$t('profile_detail.introduction')"
                    prop="introduct"
                  >
                    <el-input
                      type="textarea"
                      :rows="5"
                      maxlength="500"
                      show-word-limit
                      placeholder="Write something about yourself"
                      v-model="person.introduct"
                    >
                    </el-input>
                  </el-form-item>
                  <span style="color: red" v-if="!isWriteIntro()"
                    >Let write an interesting introduction!</span
                  >
                </el-col>
              </el-row>
              <el-row :gutter="3" class="row-bg" type="flex">
                <el-col :xl="8" class="_flex _justify-center" />
                <el-col :xl="2" class="_flex _justify-center">
                  <el-popconfirm
                    :confirm-button-text="$t('profile_detail.confirm_yes')"
                    :cancel-button-text="$t('profile_detail.confirm_no')"
                    icon="el-icon-info"
                    icon-color="red"
                    :title="$t('profile_detail.confirm_message')"
                    @confirm="deletePerson"
                  >
                    <!-- <el-button slot="reference">Delete</el-button> -->
                    <el-button type="danger" slot="reference">{{
                      $t("profile_detail.delete")
                    }}</el-button>
                  </el-popconfirm>
                </el-col>
                <el-col :xl="2" class="_flex _justify-center"
                  ><el-button type="primary" @click="submitHandle">{{
                    $t("profile_detail.save")
                  }}</el-button></el-col
                >
              </el-row>
            </el-main>
          </el-container>
        </el-form>
      </div>
    </AddminLayout>
  </div>
</template>

<style scoped>
.hide_upload > div {
  display: none;
}
.avatar-wrapper {
  margin-top: 100px;
}

.custom-age-col {
  margin-left: 30px;
  margin-right: 20px;
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
import { Hobbies } from "../models/hobbies/Hobbies";
import { allHobbies, allProfile } from "../fakedata";

class PersonModel {
  id!: string;
  avatar =
    "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg";
  firstName!: string;
  lastName!: string;
  selectedGender!: number;
  age!: number | undefined;
  dateOfBirth!: string;
  everMarried!: boolean;
  selectedHobbies!: string[];
  socialAccount!: string;
  introduct!: string;
  constructor(init?: Partial<PersonModel>) {
    Object.assign(this, init);
  }
}

@Component({
  components: {
    AddminLayout,
  },
})
export default class ProfileDetail extends Vue {
  $message: any;
  $store: any;
  $router: any;
  $route: any;
  $t: any;

  private genderOptions: any[] = [];

  private hobbiesOptions: any[] = [];

  private rules = {
    firstName: [
      {
        required: true,
        message: "Please input first name",
        trigger: "blur",
      },
    ],
    lastName: [
      {
        required: true,
        message: "Please input last name",
        trigger: "blur",
      },
    ],
    selectedGender: [
      {
        required: true,
        message: "Please select gender",
        trigger: "blur",
      },
    ],
    age: [
      {
        required: true,
        message: "require!",
        trigger: "blur",
      },
    ],
    dateOfBirth: [
      {
        required: true,
        message: "Please select your birthday",
        trigger: "blur",
      },
    ],
    // selectedHobbies: [
    //   {
    //     required: true,
    //     message: "Please select your hobbies",
    //     trigger: "blur",
    //   },
    // ],
    everMarried: [
      {
        required: true,
        message: "Please sellect",
        trigger: "blur",
      },
    ],
    // socialAccount: [
    //   {
    //     required: true,
    //     message: "Please input your social account",
    //     trigger: "blur",
    //   },
    // ],
    // introduct: [
    //   {
    //     required: true,
    //     message: "Please input your introduction",
    //     trigger: "blur",
    //   },
    // ],
  };

  private fullName = "";

  private person = new PersonModel({
    id: "",
    avatar:
      "https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg",
    firstName: "",
    lastName: "",
    selectedGender: 0,
    age: undefined,
    dateOfBirth: "",
    everMarried: true,
    selectedHobbies: [],
    socialAccount: "",
    introduct: "",
  });

  //computed
  private isWriteIntro = () => {
    if (this.person.introduct) {
      return true;
    }
    return false;
  };

  public created() {
    //start screen
    this.genderOptions = [
      {
        value: Gender.MALE,
        label: String(this.$t("profile_detail.male")),
      },
      {
        value: Gender.FEMALE,
        label: String(this.$t("profile_detail.female")),
      },
      {
        value: Gender.OTHER,
        label: String(this.$t("profile_detail.other")),
      },
    ];

    this.hobbiesOptions = allHobbies.map((hob) => ({
      value: hob.id,
      label: hob.name,
    }));

    //binding person
    const id = this.$route.params.id;
    if (id) {
      const p = allProfile.find((item) => item.id === String(id));
      if (p) {
        this.person.id = p.id ? p.id : "";
        p.avatar ? (this.person.avatar = p.avatar) : "";
        this.person.firstName = p.firstName ? p.firstName : "";
        this.person.lastName = p.lastName ? p.lastName : "";
        this.person.selectedGender = p.gender ? p.gender : 0;
        this.person.age = p.age ? p.age : undefined;
        this.person.dateOfBirth = p.dateOfBirth ? p.dateOfBirth : "";
        this.person.everMarried = p.everMarried ? p.everMarried : false;
        this.person.selectedHobbies = p.hobbies
          ? p.hobbies.map((i) => (i.id ? i.id : ""))
          : [];
        this.person.socialAccount = p.socialAccount ? p.socialAccount : "";
        this.person.introduct = p.introduce ? p.introduce : "";
      } else {
        this.createNew();
      }
    } else {
      this.createNew();
    }

    this.fullName = this.person.firstName + " " + this.person.lastName;

    //watch
    this.$watch(
      "person.firstName",
      (newVal: string) => (this.fullName = newVal + " " + this.person.lastName)
    );
    this.$watch(
      "person.lastName",
      (newVal: string) => (this.fullName = this.person.firstName + " " + newVal)
    );
  }

  public toggleUpload(file: any) {
    const isIamge = file.raw.type.search("image/") !== -1;
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isIamge) {
      return this.$message({
        message: "Not support this format!",
        type: "error",
        offset: 10,
      });
    }
    if (!isLt2M) {
      return this.$message({
        message: "Avatar picture size can not exceed 2MB!",
        type: "error",
        offset: 10,
      });
    }
    this.person.avatar = URL.createObjectURL(file.raw);
  }

  public submitHandle() {
    (this.$refs["profileDetail"] as any).validate((valid: boolean) => {
      if (valid) {
        const checkPerson = allProfile.find((p) => p.id === this.person.id);
        if (checkPerson) {
          checkPerson.avatar = this.person.avatar;
          checkPerson.firstName = this.person.firstName;
          checkPerson.lastName = this.person.lastName;
          checkPerson.gender = this.person.selectedGender;
          checkPerson.age = this.person.age ? this.person.age : 0;
          checkPerson.dateOfBirth = this.person.dateOfBirth;
          checkPerson.everMarried = this.person.everMarried;
          checkPerson.hobbies = this.getListHobbies();
          checkPerson.socialAccount = this.person.socialAccount;
          checkPerson.introduce = this.person.introduct;
          this.$message(String(this.$t("profile_detail.update_success")));
          return this.$router.push("/all-profile");
        }
        const newPerson = new Person({
          id: String("ID" + Math.round(Math.random() * 9999)),
          avatar: this.person.avatar,
          firstName: this.person.firstName,
          lastName: this.person.lastName,
          gender: this.person.selectedGender,
          age: this.person.age,
          dateOfBirth: this.person.dateOfBirth,
          everMarried: this.person.everMarried,
          hobbies: this.getListHobbies(),
          socialAccount: this.person.socialAccount,
          introduce: this.person.introduct,
        });
        allProfile.push(newPerson);
        this.$message.success(String(this.$t("profile_detail.save_success")));
        this.$router.push("/all-profile");
      } else {
        this.$message.error(String(this.$t("profile_detail.save_fail")));
      }
    });
  }

  public deletePerson() {
    const currentPerson = allProfile.find((p) => p.id === this.person.id);
    if (currentPerson) {
      const index = allProfile.indexOf(currentPerson);
      if (index > -1) {
        allProfile.splice(index, 1);
        this.$router.push("/all-profile");
        this.$message.success(String(this.$t("profile_detail.delete_success")));
        return;
      }
    }
    this.$message.error(String(this.$t("profile_detail.delete_fail")));
  }

  private getListHobbies(): Hobbies[] {
    const hobbies: Hobbies[] = [];
    this.person.selectedHobbies.map((id) => {
      const hobby = allHobbies.find((item) => item.id === id);
      if (hobby) {
        hobbies.push(hobby);
      }
    });
    return hobbies;
  }

  private createNew() {
    this.person.firstName = "";
    this.person.lastName = "";
    this.person.selectedGender = 0;
    this.person.age = undefined;
    this.person.dateOfBirth = "";
    this.person.everMarried = false;
    this.person.selectedHobbies = [];
    this.person.socialAccount = "";
    this.person.introduct = "";
  }
}
</script>
