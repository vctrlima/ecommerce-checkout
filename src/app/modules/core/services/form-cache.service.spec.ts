import { TestBed } from '@angular/core/testing'
import { FormCacheService } from './form-cache.service'

describe('FormCacheService', () => {
    let service: FormCacheService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(FormCacheService)
    })

    it('should be created', () => {
        expect(service).toBeTruthy()
    })
})
