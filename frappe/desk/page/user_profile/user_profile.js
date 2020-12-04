frappe.pages['user-profile'].on_page_load = function (wrapper) {
	frappe.ui.make_app_page({
		parent: wrapper,
		title: __('User Profile'),
	});
	frappe.require('assets/js/user_profile_controller.min.js', () => {
		let user_profile = new frappe.ui.UserProfile(wrapper);
		user_profile.show();
	});
};