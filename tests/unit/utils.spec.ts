import { getChainValue } from "@/utils/Object";

describe("返回对象链式的值", () => {
  test("二级对象", () => {
    expect(getChainValue("group.name", { group: { name: "张三" } })).toBe(
      "张三"
    );
  });
});
