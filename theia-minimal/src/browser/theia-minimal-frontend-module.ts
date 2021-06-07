import { ContainerModule } from 'inversify';
import { FileNavigatorContribution } from '@theia/navigator/lib/browser/navigator-contribution';
import { OutlineViewContribution } from '@theia/outline-view/lib/browser/outline-view-contribution';

export default new ContainerModule((bind, _unbind, _isBound, rebind) => {

    // Remove navigator contributions.
    rebind(FileNavigatorContribution).toConstantValue({
        registerCommands: () => { },
        registerMenus: () => { },
        registerKeybindings: () => { }
    } as any);

    // Remove outline-view contributions.
    rebind(OutlineViewContribution).toConstantValue({
        registerCommands: () => { },
        registerMenus: () => { },
        registerKeybindings: () => { }
    } as any);

});
