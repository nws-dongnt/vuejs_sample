<template>
  <el-table :data="datasource">
    <el-table-column
      v-for="(col, index) in columns"
      :key="index"
      :prop="col.prop"
      :label="col.label"
      :width="col.width ? col.width : ''"
      :labelClassName="col.labelClassName ? col.labelClassName : ''"
      :className="col.cellClassName ? col.cellClassName : ''"
      :resizable="col.resizable"
      :showOverflowTooltip="col.showOverflowTooltip"
    >
      <template slot-scope="scope">
        <div v-if="col.template">
          <Avatar
            v-if="col.template.avatar"
            :props="col.template.avatar"
            :src="scope.row[col.prop]"
          />
          <Button
            v-if="col.template.button"
            :props="col.template.button"
            :id="scope.row.id"
            @click="col.template.button.click"
          />
          <Checkbox
            v-if="col.template.checkbox"
            :checkList="scope.row[col.prop]"
            :propsCbs="col.template.checkbox.checkboxes"
            :propsCbGr="col.template.checkbox.group"
          />
          <DatePicker
            v-if="col.template.datepicker"
            :props="col.template.datepicker"
            :value="scope.row[col.prop]"
          />
          <Input
            v-if="col.template.input"
            :props="col.template.input"
            :value="scope.row[col.prop]"
          />
          <InputNumber
            v-if="col.template.inputNumber"
            :props="col.template.inputNumber"
            :value="scope.row[col.prop]"
          />
          <Radio
            v-if="col.template.radio"
            :value="scope.row[col.prop]"
            :propsRadios="col.template.radio.radios"
            :propsRadioGr="col.template.radio.group"
          />
          <Select
            v-if="col.template.select"
            :value="scope.row[col.prop]"
            :props="col.template.select"
          />
          <Upload v-if="col.template.upload" :props="col.template.upload" />
        </div>
        <span v-else> {{ scope.row[col.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Prop, Component, Vue } from "vue-property-decorator";
import {
  TableColumnType,
  TableColumnFixedType,
  VNode,
  SortOrders,
  TableColumn,
  ElementUIHorizontalAlignment,
  TableColumnFilter,
  PopoverPlacement,
} from "./control/common";

import TemplateAvatar from "./control/avatar/avatar";
import TemplateButton from "./control/button/button";
import TemplateCheckbox from "./control/checkbox/checkbox";
import TemplateDatePicker from "./control/datepicker/datepicker";
import TemplateInput from "./control/input/input";
import TemplateInputNumber from "./control/inputnumber/inputnumber";
import TemplateRadio from "./control/radio/radio";
import TemplateSelect from "./control/select/select";
import TemplateUpload from "./control/upload/upload";

import Avatar from "./control/avatar/Avatar.vue";
import Button from "./control/button/Button.vue";
import Checkbox from "./control/checkbox/Checkbox.vue";
import DatePicker from "./control/datepicker/DatePicker.vue";
import Input from "./control/input/Input.vue";
import InputNumber from "./control/inputnumber/InputNumber.vue";
import Radio from "./control/radio/Radio.vue";
import Select from "./control/select/Select.vue";
import Upload from "./control/upload/Upload.vue";

export class CustomColumn {
  /** Type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon. */
  type?: TableColumnType;

  /** Column label */
  label!: string;

  /** Column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered */
  columnKey?: string;

  /** Field name. You can also use its alias: property */
  prop!: string;

  /** Column width */
  width?: string;

  /** Column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion */
  minWidth?: string;

  /** Whether column is fixed at left/right. Will be fixed at left if `true` */
  fixed?: boolean | TableColumnFixedType;

  /** Render function for table header of this column */
  renderHeader?: (h: any, data: any) => VNode | string;

  /** Whether column can be sorted */
  sortable?: boolean | "custom";

  /** Sorting method. Works when `sortable` is `true` */
  sortMethod?: (a: any, b: any) => number;

  /** The order of the sorting strategies used when sorting the data. Works when `sortable` is `true`. */
  sortOrders?: SortOrders[];

  /** Whether column width can be resized. Works when border of `el-table` is `true` */
  resizable?: boolean;

  /** Function that formats content */
  formatter?: (row: object, column: TableColumn) => any;

  /** Whether to hide extra content and show them in a tooltip when hovering on the cell */
  showOverflowTooltip?: boolean;

  /** Alignment */
  align?: ElementUIHorizontalAlignment;

  /** Alignment of the table header. If omitted, the value of the `align` attribute will be applied */
  headerAlign?: ElementUIHorizontalAlignment;

  /** Class name of cells in the column */
  cellClassName?: string;

  /** Class name of the label of this column */
  labelClassName?: string;

  /** Function that determines if a certain row can be selected, works when `type` is `'selection'` */
  selectable?: (row: object, index: number) => boolean;

  /** Whether to reserve selection after data refreshing, works when `type` is `'selection'` */
  reserveSelection?: boolean;

  /** An array of data filtering options */
  filters?: TableColumnFilter[];

  /** Placement for the filter dropdown */
  filterPlacement?: PopoverPlacement;

  /** Whether data filtering supports multiple options */
  filterMultiple?: boolean;

  /** Data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true` */
  filterMethod?: (value: any, row: object) => boolean;

  /** Filter value for selected data, might be useful when table header is rendered with `render-header` */
  filteredValue?: TableColumnFilter[];

  template?: ColumnTemplate;

  constructor(init?: Partial<CustomColumn>) {
    Object.assign(this, init);
  }
}

export class ColumnTemplate {
  avatar?: TemplateAvatar;
  button?: TemplateButton;
  checkbox?: TemplateCheckbox;
  datepicker?: TemplateDatePicker;
  input?: TemplateInput;
  inputNumber?: TemplateInputNumber;
  radio?: TemplateRadio;
  select?: TemplateSelect;
  upload?: TemplateUpload;
  constructor(init?: Partial<ColumnTemplate>) {
    Object.assign(this, init);
  }
}

@Component({
  components: {
    Avatar,
    Button,
    Checkbox,
    DatePicker,
    Input,
    InputNumber,
    Radio,
    Select,
    Upload,
  },
})
export default class CustomTable extends Vue {
  @Prop() private datasource!: any[];
  @Prop() private columns!: CustomColumn[];
}
</script>
