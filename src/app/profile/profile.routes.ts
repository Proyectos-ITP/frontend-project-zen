import { Routes } from '@angular/router';

export const profileRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (m) => m.ProfileComponent
          )
      },
      // {
      //   path: ':id/settings',
      //   loadComponent: () =>
      //     import('./pages/settings/settings.component').then(
      //       (m) => m.SettingsComponent
      //     )
      // },
      // {
      //   path: ':id/edit',
      //   loadComponent: () =>
      //     import('./pages/edit-user/edit-user.component').then(
      //       (m) => m.EditUserComponent
      //     )
      // },
      {
        path: ':id/user-settings',
        loadComponent: () =>
          import('./pages/user-settings/user-settings.component').then(
            (m) => m.UserSettingsComponent
          )
      }
    ]
  }
];
