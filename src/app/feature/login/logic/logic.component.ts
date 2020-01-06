import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { take, catchError, switchMap, map, takeUntil } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'login-logic',
  templateUrl: './logic.component.html',
  styleUrls: ['./logic.component.scss']
})
export class LogicComponent {
  // public isRequestActive = false;

  // private doPostSort = true;

  // constructor(protected formBuilder: FormBuilder,
  //   protected changeDetectorRef: ChangeDetectorRef) {
  //   super(formBuilder, changeDetectorRef, dialogService, createFormsService);
  //   this.formName = 'bolParties';
  // }

  // public ngOnInit(): void {
  //   super.ngOnInit();
  //   super.subscribeFormsService();
  //   this.createFormsService.setFormEditMode(CREATE_BOL_FORM_NOTIFY_PARTY, 'view-active');
  // }

  // public ngOnDestroy(): void {
  //   super.ngOnDestroy();
  // }

  // public formSubmit(): void {
  //   if (!this.activeFormGroup.valid) {
  //     FORM_MARK_AS_TOUCHED(this.activeFormGroup);
  //     return;
  //   }
  //   const saveToProfile = this.activeFormGroup.get('saveToServer').value === 'Y';
  //   const party: PartyInput = COMMERCIAL_PARTY_INPUT(this.activeFormGroup);
  //   this.isRequestActive = true;
  //   this.bolCommercialPartyService.save(party, saveToProfile, this.activeBOL ? this.activeBOL.bolId : null)
  //     .pipe(
  //       take(1)
  //     )
  //     .subscribe((r: APIRequestStatus<Party>) => {
  //       this.handleAPIResponse(r);
  //     },
  //       (e: any) => {
  //         this.handleAPIResponse(null);
  //         this.dialogService.openSnackbar({
  //           message: e,
  //           panelClass: 'error'
  //         });
  //       });
  // }

  // public stepProcessingAction(): Observable<APIRequestStatus<NotifyParty>> {
  //   if (!IS_BOL_COMMERCIAL_NOTIFY_PARTY_VALID(this.formGroup)) {
  //     return of({ status: CBPTMApiStatus.FAILED, message: 'Invalid Notify Party data', validationErrors: null, data: null });
  //   }
  //   return this.apolloService.mutate<{ data: { notifyPartySave: Response_NotifyParty } }>({
  //     mutation: MUTATE_NOTIFY_PARTY_SAVE,
  //     variables: {
  //       bolId: this.activeBOL.bolId,
  //       notifyParties: this.getNotifyPartiesInput(),
  //     },
  //   }).pipe(
  //     catchError(error => of({ errors: error })),
  //     switchMap((r: ApolloQueryResult<{ notifyPartySave: Response_NotifyParty }>) =>
  //       r.errors ? throwError(DEFAULT_NP_ERROR) : of(r.data.notifyPartySave)
  //     ),
  //     map((r: Response_NotifyParty): APIRequestStatus<NotifyParty> => {
  //       return {
  //         status: r.status,
  //         message: r.message,
  //         validationErrors: r.validationErrors,
  //         data: r.data,
  //       };
  //     })
  //   );
  // }

  // protected createFormItem(e: CreateFormItemEvent): void {
  //   if (e && e.formName !== this.formName) {
  //     return;
  //   }
  //   this.activeFormGroup = BOL_COMMERCIAL_PARTY_CREATE(this.formBuilder);
  //   this.changeDetectorRef.markForCheck();
  // }

  // protected handleCreateFormItemEventModify(e: CreateFormItemEvent): void {
  //   switch (e.formName) {
  //     case SHIPPERS:
  //     case CONSIGNEES:
  //     case CREATE_BOL_FORM_COMMERCIAL_PARTIES:
  //       this.activeFormGroup = BOL_COMMERCIAL_PARTY_HYDRATE(this.formBuilder, e.localObject as Party);

  //       this.createFormsService.setFormEditMode(this.formName, 'view-active');

  //       FORM_MARK_AS_TOUCHED(this.activeFormGroup);
  //       this.changeDetectorRef.markForCheck();
  //       return;
  //   }
  // }

  // protected handleCreateFormItemEventDelete(e: CreateFormItemEvent): void {
  //   if (e && e.formStep !== this.formName) {
  //     return;
  //   }

  //   const party: Party = this.bolCommercialPartyService.findParty(e.internalId);

  //   party.isRequestActive = true;
  //   this.delete(party);
  // }

  // protected handleAPIResponse(r: APIRequestStatus<Party>): void {
  //   this.isRequestActive = false;
  //   super.handleAPIResponse(r);

  //   BOL_COMMERCIAL_PARTY_VALIDATE(this.formGroup,
  //     this.bolCommercialPartyService.consigneeDataSource.data,
  //     this.bolCommercialPartyService.shipperDataSource.data);

  //   if (r && r.status === CBPTMApiStatus.SUCCESS) {
  //     this.dialogService.openSnackbar({
  //       message: `Successfully processed Commercial Party request`,
  //       panelClass: 'success'
  //     });
  //   }
  // }


  // protected onBOLLoad() {
  //   if (!this.activeBOL) {
  //     return;
  //   }
  //   BOL_COMMERCIAL_PARTY_VALIDATE(this.formGroup,
  //     this.bolCommercialPartyService.consigneeDataSource.data,
  //     this.bolCommercialPartyService.shipperDataSource.data);

  //   this.formGroup.root.get('notifyParty').statusChanges
  //     .pipe(
  //       takeUntil(this.componentIdle),
  //     ).subscribe(() => this.formGroup.get('hasValidNotifyParties').setValue(IS_BOL_COMMERCIAL_NOTIFY_PARTY_VALID(this.formGroup)));
  // }

  // private delete(party: Party): void {
  //   this.bolCommercialPartyService.delete(party.accountPartyId)
  //     .pipe(take(1))
  //     .subscribe(
  //       (r: APIRequestStatus<Party>) => this.handleAPIResponse(r),
  //       (e: any) => {
  //         party.isRequestActive = false;
  //         this.dialogService.openSnackbar({
  //           message: e,
  //           panelClass: 'error'
  //         });
  //       }
  //     );
  // }

  // private getNotifyPartiesInput(): NotifyPartyInput[] {
  //   const parties: FormArray = this.formGroup.root.get('notifyParty')
  //     .get('parties') as FormArray;
  //   const notifyParties: NotifyPartyInput[] = [];
  //   for (let i = 0; i < parties.length; i += 1) {
  //     const fg: FormGroup = parties.at(i) as FormGroup;
  //     notifyParties.push({
  //       partyId: fg.get('partyId').value,
  //       partyTypeCode: fg.get('partyTypeCode').value,
  //       notifyPartyId: fg.get('notifyPartyId').value
  //     });
  //   }
  //   return notifyParties;
}