const initialState = {
    teamMemberRoutes: [
        { id: 1, label: 'Stall Dashboard', isActive: true, path: '/TeamMember' },
        // { id: 2, label: 'Dummy Dashboard', isActive: false, path: '/TeamMember/Dummy' },
    ],
    managerRoutes: [
        { id: 1, label: 'Site Metrics', isActive: true, path: '/Manager' },
        { id: 2, label: 'Production Line Metrics', isActive: false, path: '/Manager/ProductionLineMetrics' },
        { id: 3, label: 'Vehicle Progress Tracking Board', isActive: false, path: '/Manager/VPTB' },
        { id: 4, label: 'Staffing', isActive: false, path: '/Manager/Staffing' }
    ],
    // routes:[]
};

const ConfigReducer = (state = initialState, action: any) => {
    switch (action.type) {
        // case 'setRoutes':
        //     const initialRoute = action.persona === 'team_member' ? state.teamMemberRoutes : state.managerRoutes;

        //     return {
        //         ...state,
        //         routes: initialRoute
        //     }
        case 'update_tab_success':
            const personaBasedRoute = action.persona === 'team_member' ? state.teamMemberRoutes : state.managerRoutes;
            const updatedRoutes = personaBasedRoute.map((item: any) => {
                if (item.path === action.path) {
                    return { ...item, isActive: true }
                }
                else {
                    return { ...item, isActive: false }
                }
            })
            if (action.persona === 'team_member') {
                return {
                    ...state,
                    teamMemberRoutes: updatedRoutes,
                   managerRoutes: []
                }
            } else if (action.persona === 'manager') {
                return {
                    ...state,
                    teamMemberRoutes: [],
                    managerRoutes: updatedRoutes
                }
            }
        default:
            return state
    }
};

export default ConfigReducer;
