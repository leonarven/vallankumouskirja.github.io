
export class SongListService {
	
	open: boolean = true;
	
	toggleOpen() {
		return this.isOpen( !this.open );
	}

	isOpen( isOpen: (null|boolean) = null ) {

		if (isOpen !== null) this.open = !!isOpen;
		
		return this.open;
	}
	
	close() {
		return this.isOpen( false );
	}
}
