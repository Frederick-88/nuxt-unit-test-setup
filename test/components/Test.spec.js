import { mount } from "@vue/test-utils";
import Test from "@/components/test.vue";

describe("Components/Test", () => {
  test("Mounts", () => {
    const wrapper = mount(Test);
    expect(wrapper.vm).toBeTruthy();
  });
});
