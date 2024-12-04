import ElTable from "~/components/templates/Table.vue";

const meta = {
  title: "ui/Table",
  component: ElTable,
  tags: ["autodocs"],
};

export default meta;

export const ElTableStory = {
  render: (args) => ({
    components: { ElTable },
    setup() {
      return { args };
    },
    template: `
      <div>
        <Table v-bind="args" />
      </div>
    `,
  }),
  args: {
    tableData: [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ],
    tableRowClassName: ({ row, rowIndex }) => {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
