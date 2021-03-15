// This is ver 2
<template>
  <div>
    <AdminLayout>
      <el-button
        style="float: left; margin-bottom: 15px"
        @click="toCreatePage"
        type="primary"
      >
        {{ $t("all_profile.create_profile") }}
      </el-button>
      <CustomTable2 :datasource="tableData" :columns="columns" />
    </AdminLayout>
  </div>
</template>

<style scoped>
.intro-custom {
  width: calc(100% - 20px);
  border: none !important;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AdminLayout from "../layouts/AdminLayout.vue";
import { allProfile, allHobbies } from "../fakedata";
import { Gender } from "../models/person/Person";

import CustomTable2, {
  CustomColumn,
} from "../components/CustomTable2/index.vue";

import fullNameComponent from "./AllProfile_ver2/CustomInput.vue";
import ageComponent from "./AllProfile_ver2/CustomInputNumber.vue";
import genderComponent from "./AllProfile_ver2/CustomRadio.vue";
import checkboxComponent from "./AllProfile_ver2/CustomCheckbox.vue";
import selectComponent from "./AllProfile_ver2/CustomSelect.vue";
import datePickerComponent from "./AllProfile_ver2/CustomDatePicker.vue";
import fileUploadComponent from "./AllProfile_ver2/CustomFileUpload.vue";
import buttonComponent from "./AllProfile_ver2/CustomButton.vue";

export class PersonInfoModel {
  id = "";
  index = 0;
  avatar = "";
  dateOfBirth = "";
  fullName = "";
  gender = 0;
  age = 0;
  everMarried = "";
  introduce = "";
  hobbies: string[] = [];
  socialAccount = "";
  constructor(init?: Partial<PersonInfoModel>) {
    Object.assign(this, init);
  }
}

@Component({
  components: {
    AdminLayout,
    CustomTable2,
  },
})
export default class AllProfile extends Vue {
  $router: any;
  $store: any;
  $t: any;

  //define columns
  private columns: CustomColumn[] = [];

  //create data-source
  private tableData: PersonInfoModel[] = [];

  private mounted() {
    const avatarComponent = () => ({
      component: import("./AllProfile_ver2/CustomAvatar.vue"),
    });

    //define columns
    const colIndex = new CustomColumn({
      prop: "index",
      label: this.$t("all_profile.index"),
      width: "50",
      labelClassName: "label-index",
      cellClassName: "cell-index",
      resizable: true,
      showOverflowTooltip: true,
    });

    const colAvatar = new CustomColumn({
      prop: "avatar",
      label: this.$t("all_profile.avatar"),
      width: "80",
      template: avatarComponent,
    });

    const colFullName = new CustomColumn({
      prop: "fullName",
      label: this.$t("all_profile.fullname"),
      width: "200",
      template: fullNameComponent,
    });

    const colAge = new CustomColumn({
      prop: "age",
      label: "Age",
      template: ageComponent,
    });

    const colGender = new CustomColumn({
      prop: "gender",
      label: "Gender",
      width: "160",
      template: genderComponent,
    });

    const colCheckbox = new CustomColumn({
      prop: "hobbies",
      label: "Checkbox",
      width: "160",
      template: checkboxComponent,
    });

    const colHobbies = new CustomColumn({
      prop: "hobbies",
      label: "Hobbies",
      template: selectComponent,
    });

    const colDOB = new CustomColumn({
      prop: "dateOfBirth",
      label: "DOB",
      template: datePickerComponent,
    });

    const colChangeAvatar = new CustomColumn({
      prop: "avatar",
      label: "File Upload",
      width: "100",
      template: fileUploadComponent,
    });

    const colDetail = new CustomColumn({
      prop: "detail",
      label: "Detail",
       width: "100",
      template: buttonComponent,
    });

    this.columns = [
      colIndex,
      colAvatar,
      colFullName,
      colAge,
      colGender,
      colCheckbox,
      colHobbies,
      colDOB,
      colChangeAvatar,
      colDetail,
    ];

    //create data-source
    this.tableData = allProfile.map((item, index) => {
      return new PersonInfoModel({
        id: item.id,
        index: index + 1,
        avatar: item.avatar,
        dateOfBirth: item.dateOfBirth,
        fullName: item.lastName + " " + item.firstName,
        gender: item.gender ? item.gender : Gender.MALE,
        age: item.age,
        everMarried: item.everMarried
          ? String(this.$t("all_profile.yes"))
          : String(this.$t("all_profile.no")),
        introduce: item.introduce,
        hobbies: item.hobbies ? item.hobbies.map((hob) => hob.name) : [],
        socialAccount: item.socialAccount,
      });
    });
  }

  private toCreatePage() {
    this.$router.push("/profile-detail/create");
  }
}
</script>
