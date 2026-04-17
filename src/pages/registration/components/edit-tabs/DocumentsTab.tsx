import { useFormContext } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, UploadCloud, FileCheck2, FileX2 } from "lucide-react";

interface DocumentRowProps {
    fieldId: string;
    label: string;
    currentFileName?: string | null;
    required?: boolean;
    isConditional?: boolean;
}

function DocumentRow({ fieldId, label, currentFileName, required, isConditional }: DocumentRowProps) {
    const { control } = useFormContext();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start py-4 border-b last:border-0 last:pb-0">
            {/* Left: label + current file status */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-semibold">
                        {label}
                        {required && <span className="text-destructive ml-1">*</span>}
                    </h4>
                    {isConditional && (
                        <Badge variant="outline" className="text-[10px] text-amber-600 border-amber-300 bg-amber-50">
                            Conditional
                        </Badge>
                    )}
                </div>
                {currentFileName ? (
                    <div className="flex items-center gap-2">
                        <Badge className="gap-1.5 bg-emerald-100 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 text-xs">
                            <FileCheck2 className="h-3 w-3" />
                            {currentFileName}
                        </Badge>
                        <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-xs text-primary gap-1"
                            type="button"
                        >
                            <Eye className="h-3 w-3" />
                            View
                        </Button>
                    </div>
                ) : (
                    <Badge variant="outline" className="gap-1.5 text-muted-foreground text-xs">
                        <FileX2 className="h-3 w-3" />
                        Not Uploaded
                    </Badge>
                )}
            </div>

            {/* Right: Upload replacement */}
            <FormField
                control={control}
                name={fieldId as any}
                render={({ field: { value, onChange, ...field } }) => (
                    <FormItem>
                        <FormLabel className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                            <UploadCloud className="h-3.5 w-3.5" />
                            Upload Replacement
                            {!currentFileName && required && (
                                <span className="text-destructive ml-1">(Required)</span>
                            )}
                        </FormLabel>
                        <FormControl>
                            <Input
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                className="text-xs cursor-pointer file:text-xs file:font-medium file:text-primary file:border-0 file:bg-primary/10 file:hover:bg-primary/20 file:rounded file:px-2 file:py-1 file:mr-3 file:cursor-pointer"
                                onChange={(e) => onChange(e.target.files)}
                                {...field}
                            />
                        </FormControl>
                        <p className="text-[10px] text-muted-foreground">Accepted: JPG, PNG, PDF · Max 2MB</p>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </div>
    );
}

export function DocumentsTab() {
    const { watch } = useFormContext();
    const casteCategory = watch("casteCategory");
    const showCasteCertificate = casteCategory && casteCategory !== "General";

    return (
        <div className="space-y-6">
            {/* Personal Documents */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Personal Documents</CardTitle>
                    <CardDescription>
                        Identity, photograph, and supporting personal documents
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DocumentRow
                        fieldId="doc_photo"
                        label="Passport Size Photograph"
                        currentFileName="photo_applicant.jpg"
                        required
                    />
                    <DocumentRow
                        fieldId="doc_signature"
                        label="Applicant Signature"
                        currentFileName="signature.png"
                        required
                    />
                    <DocumentRow
                        fieldId="doc_dob"
                        label="Date of Birth Proof (10th Certificate / Birth Certificate)"
                        currentFileName="dob_proof.pdf"
                        required
                    />
                    {showCasteCertificate && (
                        <DocumentRow
                            fieldId="doc_casteCertificate"
                            label={`Caste Certificate (${casteCategory})`}
                            currentFileName={null}
                            required
                            isConditional
                        />
                    )}
                </CardContent>
            </Card>

            {/* Academic Documents */}
            <Card className="shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base font-semibold text-primary">Academic Documents</CardTitle>
                    <CardDescription>
                        Degree certificates, marksheets, and training proof
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <DocumentRow
                        fieldId="doc_provisionalDegree"
                        label="Provisional or Final Degree Certificate"
                        currentFileName="degree_certificate.pdf"
                        required
                    />
                    <DocumentRow
                        fieldId="doc_marksheet"
                        label="All Semester / Consolidated Marksheet"
                        currentFileName="consolidated_marksheet.pdf"
                        required
                    />
                    <DocumentRow
                        fieldId="doc_twelfthMarksheet"
                        label="10+2 or Equivalent Marksheet"
                        currentFileName="12th_marksheet.pdf"
                        required
                    />
                    <DocumentRow
                        fieldId="doc_practicalTraining"
                        label="Practical Training Certificate"
                        currentFileName={null}
                    />
                </CardContent>
            </Card>

            {/* Note */}
            <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-amber-800">
                <p className="font-semibold mb-1">Document Upload Guidelines</p>
                <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Uploading a replacement will override the currently stored file upon saving.</li>
                    <li>Caste Certificate is required only for OBC, SC, ST, or EWS categories.</li>
                    <li>All certificates must be self-attested by the applicant.</li>
                    <li>Maximum file size: 2MB per document. Accepted formats: JPG, PNG, PDF.</li>
                </ul>
            </div>
        </div>
    );
}
