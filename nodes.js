
var link_pairs = [
  ['OrganizationSubscription', 'Ticket'],
  ['OrganizationSubscription', 'Customer'],
  ['Work_Allocation', 'Ticket'],
  ['Work_Allocation', 'OrganizationSubscription'],
  ['Work_Allocation', 'Customer'],
  ['DoubleOptIn', 'Customer'],
  ['DoubleOptIn', 'Ticket'],
  ['DoubleOptIn', 'OrganizationSubscription'],
  ['Gigwalker', 'Customer'],
  ['Paypal', 'Gigwalker'],
  ['needs_core', 'OrganizationSubscription'],
  ['needs_core', '2.0'],
  ['approval', 'OrganizationSubscription'],
  ['approval', 'Ticket'],
  ['Project_creator', 'Customer'],
  ['Project_creator', 'super_admin'],
  ['Customer', 'worker'],
  ['Autoassign', 'OrganizationSubscription'],
  ['Autoassign', 'Work_Allocation'],
  ['Organization', 'Gigwalk'],
  ['Gigwalker', 'public_workforce'],
  ['Gigwalk', 'id = 5'],
  ['Gigwalk', 'Gigwalker'],
  ['Gigwalker', 'public_workforce'],
  ['Apply_and_system_approved', 'SYSTEM_APPROVED_OPTIN'],
  ['Apply_and_approve', 'DOUBLE_OPTIN'],
  ['worker', 'Ticket'],
  ['Public_Project', 'OrganizationSubscription'],
  ['Ticket', 'assign'],
  ['assign', 'manual_assign'],
  ['manager', 'manual_assign'],
  ['admin', 'manager'],
  ['super_admin', 'manager'],
  ['DoubleOptIn', 'applicants'],
  ['applicants', 'worker'],
  ['worker', 'certification'],
  ['worker', 'group'],
  ['manual_assign', 'rarely_used'],
  ['Ticket', 'force'],
  ['soft-dated', 'Ticket'],
  ['hard-dated', 'Ticket'],
  ['single_opt_in', 'worker'],
  ['OrganizationSubscription', 'Waves']
]
