import { mount } from '@vue/test-utils';
import Sidebar from '@/components/sidebar.vue';

xdescribe('Sidebar menu component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Sidebar);
    expect(wrapper.vm).toBeTruthy();
  });
});
