class Loan//class
{
    constructor(id,loanType,tenure,interest,principal)//constructor
        {
            this.id=id;//property
            this.loanType=loanType;
            this.principal=principal;
            this._tenure=tenure;
            this._interest=interest;
        }

    get tenure()//encapsulation and abstration
        {
            return this._tenure*12;
        }

    toStringValue(value)//method
        {
            return value;
        }
}

class MortgageLoan extends Loan//inheritance
{
    constructor(id,loanType,tenure,interest,principal,collateralType)
        {
            super(id,loanType,tenure,interest,principal);
            this.collateralType=collateralType;
        }

    toStringValue(value)//polymorphism
        {
            return this.id + super.toStringValue(value)
        }
}