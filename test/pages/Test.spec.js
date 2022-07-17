import { mount } from "@vue/test-utils";
import Test from "@/pages/test.vue";

describe("Pages/Test", () => {
  test("Mounts", () => {
    const wrapper = mount(Test);
    expect(wrapper.vm).toBeTruthy();
  });
});
