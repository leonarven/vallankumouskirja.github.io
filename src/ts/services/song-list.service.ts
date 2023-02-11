import { ResizeService } from './resize.service'

export class SongListService {

	open: boolean = true;
	
	resize;

	static $inject = [ "resize" ];

	constructor( resize: ResizeService ) {
		this.resize = resize;
	}

	toggleOpen() {
		return this.isOpen( !this.open );
	}

	isOpen( isOpen: (null|boolean) = null ) {

		if (isOpen !== null) {
			this.setOpen( isOpen );
		}
		
		return this.open;
	}

	setOpen( isOpen ) {
		
		if (this.open && isOpen) return;
		if (!this.open && !isOpen) return;

		this.open = !!isOpen;
		
		this.resize.$emit( "resize" );
	}
	
	close() {
		return this.isOpen( false );
	}
}
