<template>
  <div>
    <AdminLayout>
      <el-button
        style="float: left; margin-bottom: 15px"
        @click="toCreatePage"
        type="primary"
        >{{ $t("all_profile.create_profile") }}</el-button
      >
      <CustomTable :datasource="tableData" :columns="columns" />
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

import CustomTable, {
  CustomColumn,
  ColumnTemplate,
} from "../components/CustomTable/index.vue";

import TemplateAvatar from "../components/CustomTable/control/avatar/avatar";

import TemplateButton from "../components/CustomTable/control/button/button";

import TemplateCheckbox, {
  TemplateCheckBoxRadio,
  TemplateCheckBoxGroup,
} from "../components/CustomTable/control/checkbox/checkbox";

import TemplateDatePicker from "../components/CustomTable/control/datepicker/datepicker";

import TemplateInput from "../components/CustomTable/control/input/input";

import TemplateInputNumber from "../components/CustomTable/control/inputnumber/inputnumber";

import TemplateSelect from "../components/CustomTable/control/select/select";

import TemplateRadio, {
  TemplateRadioChild,
  TemplateRadioGroup,
} from "../components/CustomTable/control/radio/radio";

export class PersonInfoModel {
  id = "";
  index = 0;
  avatar = "";
  dateOfBirth = "";
  fullName = "";
  gender = "";
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
    CustomTable,
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
      width: "70",
      template: new ColumnTemplate({
        avatar: new TemplateAvatar({
          size: 40,
        }),
      }),
    });

    const colName = new CustomColumn({
      prop: "fullName",
      label: this.$t("all_profile.fullname"),
      template: new ColumnTemplate({
        input: new TemplateInput({
          name: "fullName",
        }),
      }),
    });

    const colAge = new CustomColumn({
      prop: "age",
      label: "Age",
      template: new ColumnTemplate({
        inputNumber: new TemplateInputNumber({
          name: "age",
        }),
      }),
    });

     const hobbiesOptions = allHobbies.map((hob) => ({
      value: hob.id,
      label: hob.name,
    }));

    const colHobbies = new CustomColumn({
      prop: "hobbies",
      label: this.$t("all_profile.hobbies"),
      template: new ColumnTemplate({
        select: new TemplateSelect({
          noDataText: "No data",
          options: hobbiesOptions,
          multiple: true,
          filterable: true,
          // collapse-tags: true //TODO dongnt
        }),
      }),
    });

    const colRadio = new CustomColumn({
      prop: "everMarried",
      label: "everMarried",
      template: new ColumnTemplate({
        radio: new TemplateRadio({
          group: new TemplateRadioGroup(),
          radios: [
            new TemplateRadioChild({
              label: "YES",
            }),
            new TemplateRadioChild({
              label: "NO",
            }),
          ],
        }),
      }),
    });

    const colCheckbox = new CustomColumn({
      prop: "hobbies",
      label: "Checkbox",
      template: new ColumnTemplate({
        checkbox: new TemplateCheckbox({
          group: new TemplateCheckBoxGroup(),
          checkboxes: [
            new TemplateCheckBoxRadio({
              label: "Hihi",
            }),
            new TemplateCheckBoxRadio({
              label: "Haha",
            }),
          ],
        }),
      }),
    });

    const colDOB = new CustomColumn({
      prop: "dateOfBirth",
      label: "Date of Birth",
      template: new ColumnTemplate({
        datepicker: new TemplateDatePicker({
          placeholder: "hihi xin qua",
        }),
      }),
    });

    const colButton = new CustomColumn({
      prop: "detail",
      label: this.$t("all_profile.detail"),
      template: new ColumnTemplate({
        button: new TemplateButton({
          label: "Detail",
          click: this.toDetailPage, //TODO dongnt
        }),
      }),
    });

    this.columns = [
      colIndex,
      colAvatar,
      colName,
      colAge,
      colRadio,
      colHobbies,
      colCheckbox,
      colDOB,
      colButton,
    ];

    //create data-source
    this.tableData = allProfile.map((item, index) => {
      return new PersonInfoModel({
        id: item.id,
        index: index + 1,
        avatar: item.avatar,
        dateOfBirth: item.dateOfBirth,
        fullName: item.lastName + " " + item.firstName,
        gender: item.gender
          ? this.getGenderClassName(item.gender)
          : this.getGenderClassName(Gender.MALE),
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
    this.$router.push(`/profile-detail/update/` + id);
  }
}
</script>
